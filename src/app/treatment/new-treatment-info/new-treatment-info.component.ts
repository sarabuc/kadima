import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient, DbService, PlanForPatient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-new-treatment-info',
  templateUrl: './new-treatment-info.component.html',
  styleUrls: ['./new-treatment-info.component.scss']
})
export class NewTreatmentInfoComponent implements OnInit {

  patientList;
  //for search
  fname = '';
  lname = '';
  grade = '';
  canGetInfo;
  canGetPlan;
  canGetTherapist;
  choosedPlan;
  theraPatientList = [];
  planToChoose = [];
  therapistListForPlan = [];
  diffiListInPlan = [];
  @Input() Tid = ''; // therapist: Therapist;
  @Input() Pid = ''; // patient: Patient;
  Tname = '';
  Pname = '';
  isFirstTreat = true;

  val;
  startTime = ''; endTime = ''; hours = ''; tDate: Date; discrib = ''; comment = ''; area = ''; progress;
  constructor(public sd: ShareDataService, public db: DbService) { 
    this.canGetPlan = false;
    this.canGetTherapist = false;
    this.canGetInfo = false;
  }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    } else if (!this.db.userNow.isAdmin) {
      this.getPatientListForThera();
    }
    this.patientList = this.db.allPatientList.filter(P => P.haveDificult === 'yes');
    
    if (this.Pid) {
      this.canGetPlan = true;
    }
  }
  saveNewtreatment(option) {
    console.log('info' + this.canGetInfo + this.canGetTherapist);
    const progressCode = this.getPlanDocId();
    const treat = {
      Pid: '' + this.Pid,
      Tid: '' + this.Tid,
      progressionCode: progressCode,
      area: this.area,
      treatmentNumber: '' + new Date(), // timestemp
      treatDate: this.sd.convertDateToStringDD_MM_YYYY(this.tDate),
      startTime: this.startTime,
      endTime: this.endTime,
      hours: this.hours,
      description: this.discrib,
      comment: this.comment,
      insertBy: this.db.userNow.mail,
      insertTime: new Date()
    };
    if (this.progress) {
      treat['progress'] = this.progress;
      //have to update for ML
      if(this.sd.useML) {
        const data = {
          progress: this.progress, 
          Pid: this.Pid, 
          birth_year: this.patientList.find(P => P.id === this.Pid).birthDate, 
          diffi: this.area, 
          method: this.discrib, 
          insertBy:  this.db.userNow.mail, 
          insertTime: new Date()
        }
        this.db.addTreatForML(data);
      }
    }
    const updatedHoursLeft = this.choosedPlan.hoursLeft - +this.hours;
    this.db.getPlanForPatientRef(this.Pid).doc<PlanForPatient>(this.getPlanDocId()).update({ hoursLeft: updatedHoursLeft })
    this.db.addTreatmentInfo(treat);
    if (option === 'stay') {
      // this.canGetInfo = true;
      // this.canGetTherapist = true;
      this.tDate = null;
      this.discrib = null;
      this.isFirstTreat = false;
    }
    if (option == 'out') {
      this.sd.routeTo('/home');
    }
    console.log('info' + this.canGetInfo + this.canGetTherapist);


  }
  cleanForm() {
    // this.Tid = '';
    // this.Pid = '';
    // this.Tname = '';
    // this.Pname = '';

    this.startTime = null;
    this.endTime = null;
    this.hours = null;
    this.tDate = new Date();
    this.discrib = null;
    this.comment = null;
    this.area = null;
  }
  getPlanDocId() {
    return this.choosedPlan.mipuy_id_in_db + '_P_' + this.choosedPlan.date;
  }
  getNameOfPatientByPid(Pid) {
    const pat = this.db.allPatientList.find(P => P.id === Pid);
    return pat.firstName + pat.lastName;
  }


  getPatientListForThera() {
    // this.db.getPlanForPatientRef()
    this.db.getAllTherapistsRef().doc<Therapist>(this.db.userNow.id).collection('patient').valueChanges().subscribe(P => {
      this.theraPatientList = this.db.allPatientList.filter(pat => P.findIndex(item => item.Pid === pat.id) > -1);
      this.theraPatientList.forEach(plan => {
        plan['date'] = plan.planDocId.split('_P_');
        const tempD = plan['date'].split('.');
        plan['hebrewDate'] = this.sd.convertDateToHebrewDate(tempD[0], tempD[1], tempD[2]);
      });
    });
  }


  choosePlanForAdmin() {
    if (!this.Pid) {
      this.sd.createAlert('error', 'שגיאה בעיבוד נתונים-  תלמיד נבחר לא תקין', '');
    }
    this.db.getPlanForPatientRef(this.Pid).valueChanges().subscribe(
      plans => {
        if (plans.length < 1) {
          this.sd.createAlert('info', 'לא הוגדר תכנון טיפול לתלמיד זה', '');
          return;
        }
        this.planToChoose = plans;
        this.planToChoose.forEach(plan => {
          const tempD = plan.date.split('.');
          plan['hebrewDate'] = this.sd.convertDateToHebrewDate(tempD[0], tempD[1], tempD[2]);
        });
        this.canGetPlan = true;
        console.log('choosePlanForAdmin');
        if(!this.isFirstTreat) {
          return;
        }
        this.canGetTherapist = false;
        this.canGetInfo = false;
        this.cleanForm();
      },
      error => {
        this.sd.createAlert('error', 'שגיאה בעיבוד נתונים- נא בדוק את הקלט ונסה שוב', '');
      });

  }

  choosePlanForUser() {
    if (!this.Pid) {
      this.sd.createAlert('error', 'שגיאה בעיבוד נתונים-  תלמיד נבחר לא תקין', '');
    }
    this.db.getPlanForPatientRef(this.Pid).valueChanges().subscribe(
      plans => {
        
        if (plans.length < 1) {
          this.sd.createAlert('info', 'לא הוגדר תכנון טיפול לתלמיד זה', '');
          return;
        }
        console.log(plans);
        this.planToChoose = plans.filter(P => Object.keys(P).findIndex(key => P[key] === '' + this.Tid) > -1);
        console.log(this.planToChoose);
        this.planToChoose.forEach(plan => {
          const tempD = plan.date.split('.');
          plan['hebrewDate'] = this.sd.convertDateToHebrewDate(tempD[0], tempD[1], tempD[2]);
        });
        this.canGetPlan = true;
        console.log('choosePlanForAdmin');
        if(!this.isFirstTreat) {
          return;
        }
        this.canGetTherapist = false;
        this.canGetInfo = false;
        this.cleanForm();
      },
      error => {
        this.sd.createAlert('error', 'שגיאה בעיבוד נתונים- נא בדוק את הקלט ונסה שוב', '');
      });
  }


  getPlanForAdmin(plan) {
    console.log(plan);
    if (plan.hoursLeft < 1) {
      this.sd.createAlert('info', 'מספר שעות מאושרות אזל- אין אפשרות להוסיף דיווח על טיפול', '');
      return;

    } else if (!plan) {
      // if due date
      this.sd.createAlert('info', 'תאריך אישור טיפול פג- אין אפשרות להוסיף דיווחים', '');
    } else {
      this.choosedPlan = plan;
      this.canGetTherapist = true;
      this.getTherapistsAndDiffiForPlan();
    }
  }

  /*getPlanForUser(_plan) {
    this.db.getPlanForPatientRef(this.Pid).doc<PlanForPatient>(_plan.planDocId).valueChanges().subscribe(plan => {

       if (plan.hoursLeft < 1) {
      this.sd.createAlert('info', 'מספר שעות מאושרות אזל- אין אפשרות להוסיף דיווח על טיפול', '');
    return;

    } else if (!plan) {
      // if due date
      this.sd.createAlert('info', 'תאריך אישור טיפול פג- אין אפשרות להוסיף דיווחים', '');
    } else {
      this.choosedPlan = plan;
    this.canGetInfo = true;
    }
    });
   
  }*/

  rechoosePlan() {
    console.log('inrechoose');
    this.canGetInfo = false;
    this.canGetPlan = true;
    this.canGetTherapist = false;
    this.choosedPlan = null;
    this.cleanForm();
  }


  getTherapistsAndDiffiForPlan() {
    this.therapistListForPlan = [];
    this.diffiListInPlan = [];
    Object.keys(this.choosedPlan).forEach(key => {
      if (this.choosedPlan[key] === 'yes') {
        this.diffiListInPlan.push(key);
      } else if (key.split('_')[1] && key.split('_')[1] === 'THERAPIST') {
        // check if this is a therapist
        this.therapistListForPlan.push(this.choosedPlan[key]);
        console.log(this.therapistListForPlan);

      }
    });
  }


  filterTherapistForPlanFromAllTherapist() {
    return this.db.allTherapistList.filter(T => this.therapistListForPlan.indexOf(T.id) > -1);
  }
  canGetInfoForAdmin() {
    this.canGetInfo = true;
  }



  // for search
  isGradePrefix(grade) {
    if (grade) {
      const filter = this.grade.toUpperCase();
      return (grade.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  isFnPrefix(fn) {
    if (fn) {
      const filter = this.fname.toUpperCase();
      return (fn.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  isLnPrefix(ln) {
    if (ln) {
      const filter = this.lname.toUpperCase();
      return (ln.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  filterT() {

  }
}
