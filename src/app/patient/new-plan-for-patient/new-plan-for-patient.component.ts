import { Component, OnInit, OnChanges } from '@angular/core';
import { DbService, Patient, Mipuy, MipuyDecideForPlan, PlanForPatient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-plan-for-patient',
  templateUrl: './new-plan-for-patient.component.html',
  styleUrls: ['./new-plan-for-patient.component.css']
})
export class NewPlanForPatientComponent implements OnInit, OnChanges {
  PLAN: PlanForPatient;
  planedDiffi = [];
  planFiles = [];
  pat: Patient;
  Pid;
  status;

  // any more
  optionsForParentConfirm;
  mipuyDates = []; // to chooze mipuy from all
  selectedDate;
  showListMipuy_V = false;
  showMipuy_V = false;
  chooesedMipuy: any;

  // third step
  dontHelpPlanning = true;
  helpPlanning_F = false;
  diffiForPlan = [];
  methodsForDiffi = [];
  therapistsForMethod = [];
  thereIsDiffs = false;
  allTherapists = [];
  allMethods = [];

  // last step
  uploadedFiles: any[] = [];

  constructor(public sd: ShareDataService, public db: DbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    const id = <string>this.route.snapshot.params['id'];
    if (id.includes('_P_')) {// if true its update plan
      this.status = 'update';
      this.thereIsDiffs = true;
      const plan_doc = id;
      const mipuy_doc = id.split('_P_')[0];
      this.Pid = mipuy_doc.split('_')[0];
       const mipuyDate = mipuy_doc.split('_')[1];
      this.getPatientByID();
      this.getOneMipuyForPat(mipuyDate);
      this.db.getPlanForPatientRef(this.Pid).doc<PlanForPatient>(plan_doc).valueChanges().subscribe(plan => {
        this.planFiles = [];
        this.PLAN = plan;
        Object.keys(plan).forEach(key => {
          // if (plan[key] === 'yes') { // this is a diffi was planed
          //   const Tkey = key + '_THERAPIST';
          //   const Mkey = key + '_METHOD';
          //   this.planedDiffi.push({ code: key, method: plan[Mkey], thera: plan[Tkey] });
          // }
          if (plan[key] === 'file') { // this is a file
            this.planFiles.push({ file: key, fileName: key.split('_dot_')[0] });
          }
        });
      });

    } else {
      this.status = 'new';
      this.Pid  = id;
      if (!this.Pid) {
        this.router.navigate(['/home']);
        this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');

      } else {
        this.init();
        this.PLAN = {
          Pid: this.Pid,
          history: '',
          parentsApproved: 'אין אישור',
          approvedAmountLesson: 0,
          payer: '',
          haveDueDate: false,
          mipuy_id_in_db: '',
          date: this.sd.convertDateToStringDD_MM_YYYY(new Date()),
          hoursLeft: 0
        };
        this.getPatientByID();
       
        this.helpMeChooseMAndT();
      }
    }
    
   
  }

  ngOnChanges() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }


  getPatientByID() {

    this.db.allPatientsRef.doc<Patient>('' + this.Pid).valueChanges().subscribe(P => {
      this.pat = P;

    });
  }

  finishPlan() {
this.saveMethodsAndTherapist();
this.sd.routeTo('/Pcard', this.Pid);
  }

  init() {
    this.optionsForParentConfirm = ['יש אישור', 'אין אישור', 'לא נבדק עדין'];
    this.db.getMipuyForPatient(this.Pid).subscribe(M => {
      if (M.length < 1) {
        this.sd.createAlert('error', 'לא הוגדר מיפוי לתלמיד זה', '');
     //   this.sd.routeTo('/Pcard', this.Pid);
        this.sd.routeTo('/Pcards', 'plan');
      }
      this.mipuyDates = M;
      this.mipuyDates.forEach(plan => {
        const tempD = plan.mipuyDate.split('.');
        plan['hebrewDate'] = this.sd.convertDateToHebrewDate(+tempD[0], +tempD[1], +tempD[2]);
      });
    });

    this.db.getAllTherapistsRef().valueChanges().subscribe(thera => this.allTherapists = thera);
    this.db.getAllMethodsRef().valueChanges().subscribe(methods => this.allMethods = methods);
  }
  initDiffiForPlan() {
    this.diffiForPlan = [];
    Object.keys(this.chooesedMipuy).forEach(dif => {
      if (dif !== 'mipuyDate') {
        const ob = {
          Dcode: dif,
          value: (this.PLAN[dif]) ? this.PLAN[dif] : 'no',
          method: (this.PLAN[dif + '_METHOD']) ? this.PLAN[dif + '_METHOD'] : '',
          therapist: (this.PLAN[dif + '_THERAPIST']) ? this.PLAN[dif + '_THERAPIST'] : ''
        };
        this.diffiForPlan.push(ob);
      }
    });
    console.log(this.diffiForPlan);
  }
  showListOfMipuy() {
    this.showListMipuy_V = true;
  }

  showLastMipuy() {
    if (this.mipuyDates[0]) {
      this.getOneMipuyForPat(this.mipuyDates[0].mipuyDate);
    } else {
      this.chooesedMipuy = 'no-mipuy';
    }

  }

  getOneMipuyForPat(selectedDate) {
    this.showMipuy_V = true;

    console.log(selectedDate);
    this.showListMipuy_V = false;
    this.chooesedMipuy = undefined;
    console.log('get mipuy');
    const mipuyForPatient = firebase.functions().httpsCallable('getOneMipuyByDateAndId');
    mipuyForPatient({ text: '' + this.Pid, date: selectedDate }).then(res => {
      console.log(res);
      this.chooesedMipuy = res.data;
        this.initDiffiForPlan();
     // this.showMipuy_V = false;

    }).catch(err => {
      this.chooesedMipuy = 'no internet';
      this.showMipuy_V = false;

      console.log(err);
    });
  }

  showOneMipuy(d: Mipuy) {
    this.showMipuy_V = true;
    this.getOneMipuyForPat(d.mipuyDate);
  }


  uploadFilesForPlan(event, element) {
    const storegRef = firebase.storage().ref();
    for (const file of event.files) {
      this.uploadedFiles.push(file);
      const date = new Date();
      let fileName = '' + file.name + '_D_' + date;
      const re = /\./gi;
     fileName = fileName.replace(re, '_dot_');
      const path = `/${this.Pid}/${fileName}`;
      const iRef = storegRef.child(path);
      this.PLAN['' + fileName] = 'file';
        console.log(this.PLAN);
      iRef.put(file).then((snapshot) => {
        console.log(snapshot);
        // const Pfile = {
        //   Pid: this.Pid,
        //   fileName: file.name,
        //   date: date
        // };
       // this.db.patientsFileRef.add(Pfile);
        
        this.sd.createAlert('success', 'קובץ התוסף בהצלחה', '');
      }).catch(error => {
        console.log(error);
      });
    }
    element.files = [];
  }


  updatediffiForPlan(event) {
    this.diffiForPlan.forEach(dif => {
      dif.value = event[dif.Dcode];
      if (dif.value === 'yes') {
        this.thereIsDiffs = true;
      }
    });
    console.log(this.diffiForPlan);
  }

  saveMethodsAndTherapist() {
    // if (this.status === 'new') {
      this.PLAN.hoursLeft = this.PLAN.approvedAmountLesson;
      this.PLAN.parentsApproved = (this.PLAN.parentsApproved) ? this.PLAN.parentsApproved : 'אין אישור';
       this.PLAN.mipuy_id_in_db = '' + this.pat.id + '_' + this.chooesedMipuy.mipuyDate;
      const planDocName = '' + this.PLAN.mipuy_id_in_db + '_P_' + this.PLAN.date;
      // update mipuy
      this.db.mipuyForPatientRef.doc(this.PLAN.mipuy_id_in_db).update({ 'planForPatient': planDocName });
    this.db.getAdminMassagesRef().doc('PFM' + this.PLAN.mipuy_id_in_db).delete();
      for (const dif of this.diffiForPlan) {
        this.PLAN[dif.Dcode] = dif.value;
        if (dif.value === 'yes' && dif.method !== '') {
          this.PLAN['' + dif.Dcode + '_METHOD'] = dif.method;
        }

        if (dif.value === 'yes' && dif.therapist !== '') {
          this.PLAN['' + dif.Dcode + '_THERAPIST'] = dif.therapist;
          this.db.addAprovedPlanForTherapist(dif.therapist, planDocName, this.Pid);
        }
      }
      this.db.addPlanForPatient(this.PLAN, planDocName);
      this.sd.createAlert('success', 'עודכן בהצלחה', '');
      this.sd.routeTo('updatePlan', planDocName);
    // } else if (this.status === 'update') {
     
    // }
  }
  cretaNewConnections() {
    this.diffiForPlan.forEach(dif => {
      if (dif.method !== '' && dif.Dcode !== '') {
        const M_D = {
          Mcode: dif.method,
          Dcode: dif.Dcode
        };
        this.db.addMethodForDifficult(M_D);

      }
      if (dif.Mcode !== '' && dif.therapist !== '') {
        const T_D = {
          Tid: dif.therapist,
          Mcode: dif.method
        };
        this.db.addTherapistForMethod(T_D);
      }

    });
  }
  helpMeChooseMAndT() {
    if (!this.helpPlanning_F) {
      this.db.getTherapistForMethodRef().valueChanges().subscribe(T => {
        this.therapistsForMethod = T;
        console.log(this.therapistsForMethod);
      });
      this.db.getMethodForDiffiRef().valueChanges().subscribe(M => {
        this.methodsForDiffi = M;
        console.log(this.methodsForDiffi);
      });
      this.helpPlanning_F = true;
    }
  }

  filterMethodForDiff(Dcode) {
    return this.methodsForDiffi.filter(item => item.Dcode === Dcode);
  }
  filterMethodForTherapist(Mcode) {
    return this.therapistsForMethod.filter(item => item.Mcode === Mcode);
  }

  deleteFile(file) {
    console.log(file);
    console.log(this.planFiles);
    this.planFiles.splice(this.planFiles.findIndex(p => p.file === file), 1);
    this.sd.deleteFile('' + this.PLAN.Pid + '/' + file, file, this.PLAN.mipuy_id_in_db + '_P_' + this.PLAN.date, this.Pid);
  }


}
