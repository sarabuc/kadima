import { Component, OnInit } from '@angular/core';
import { DbService, Patient, Mipuy, MipuyDecideForPlan, PlanForPatient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { saveAs } from 'file-saver/FileSaver';
@Component({
  selector: 'app-new-plan-for-patient',
  templateUrl: './new-plan-for-patient.component.html',
  styleUrls: ['./new-plan-for-patient.component.css']
})
export class NewPlanForPatientComponent implements OnInit {
  PLAN: PlanForPatient;
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
    const id = <string>this.route.snapshot.params['id'];
    if (id.includes('_P_')) {// if true its update plan
      this.status = 'update';

    } else {
      this.status = 'new';
      this.Pid  = id;
      if (!this.Pid) {
        this.router.navigate(['/home']);
        this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');

      } else {
        this.PLAN = {
          Pid: this.Pid,
          history: '',
          parentsApproved: 'אין אישור',
          approvedAmountLesson: 0,
          payer: '',
          haveDueDate: false,
          mipuy_id_in_db: '',
          date: this.sd.convertDateToStringDD_MM_YYYY(new Date())
        };
        this.getPatientByID();
        this.init();
        this.helpMeChooseMAndT();
      }
    }
    
   
  }


  getPatientByID() {

    this.db.allPatientsRef.doc<Patient>('' + this.Pid).valueChanges().subscribe(P => {
      this.pat = P;

    });
  }

  finishPlan() {




    // ...
    this.sd.routeTo('/Pcard', this.Pid);
  }

  init() {
    this.optionsForParentConfirm = ['יש אישור', 'אין אישור', 'לא נבדק עדין'];
    this.db.getMipuyForPatient(this.Pid).subscribe(M => {
      this.mipuyDates = M;
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
          value: 'no',
          method: '',
          therapist: ''
        };
        this.diffiForPlan.push(ob);
      }
    });
  }
  showListOfMipuy() {
    this.showListMipuy_V = true;
    console.log('in show list mipuy- in plan');

  }

  showLastMipuy() {
    this.showMipuy_V = true;
    if (this.mipuyDates[0]) {
      this.getOneMipuyForPat(this.mipuyDates[0].mipuyDate);
    } else {
      this.chooesedMipuy = 'no-mipuy';
    }

  }

  getOneMipuyForPat(selectedDate) {
    this.showListMipuy_V = false;
    this.chooesedMipuy = undefined;
    console.log('get mipuy');
    const mipuyForPatient = firebase.functions().httpsCallable('getOneMipuyByDateAndId');
    mipuyForPatient({ text: '' + this.Pid + '_' + selectedDate }).then(res => {
      console.log(res);
      this.chooesedMipuy = res.data;
      this.initDiffiForPlan();
    }).catch(err => {
      this.chooesedMipuy = 'no internet';
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
      const fileName = '' + file.name + '_D_' + date;
      const path = `/${this.Pid}/${fileName}`;
      const iRef = storegRef.child(path);
      iRef.put(file).then((snapshot) => {
        console.log(snapshot);
        const Pfile = {
          Pid: this.Pid,
          fileName: file.name,
          date: date
        };
       // this.db.patientsFileRef.add(Pfile);
        this.PLAN[fileName] = 'file';
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
    if (this.status === 'new') {
      this.PLAN.parentsApproved = (this.PLAN.parentsApproved) ? this.PLAN.parentsApproved : 'אין אישור';
       this.PLAN.mipuy_id_in_db = '' + this.pat.id + '_' + this.chooesedMipuy.mipuyDate;
      const planDocName = '' + this.PLAN.mipuy_id_in_db + '_P_' + this.PLAN.date;
      // update mipuy
      this.db.mipuyForPatientRef.doc(this.PLAN.mipuy_id_in_db).update({ 'planForPatient': planDocName });
      this.diffiForPlan.forEach(dif => {
        this.PLAN[dif.Dcode] = dif.value;
        if (dif.value === 'yes' && dif.method !== '') {
          this.PLAN['' + dif.Dcode + '_METHOD'] = dif.method;
        }

        if (dif.value === 'yes' && dif.therapist !== '') {
          this.PLAN['' + dif.Dcode + '_THERAPIST'] = dif.therapist;
        }
      });
      this.db.addPlanForPatient(this.PLAN, planDocName);
    }
    // const patPlan: PlanForPatient = {
    //   Pid: this.pat.id,
    //   history: (this.history) ? this.history : '',
    //   parentsApproved: (this.parentsConfirm) ? this.parentsConfirm : 'אין אישור',
    //   approvedAmountLesson: (this.amountConfirmLessons) ? this.amountConfirmLessons : 0,
    //   payer: (this.whoPay) ? this.whoPay : '',
    //   haveDueDate: this.haveDueDate,
    //   dueDate: (this.haveDueDate) ? this.dueDate : '',
    //   date: this.sd.convertDateToStringDD_MM_YYYY(new Date()),
    //   mipuy_id_in_db: '' + this.pat.id + '_' + this.chooesedMipuy.mipuyDate,
    // };
   
    
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


}
