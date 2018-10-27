import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient, DbService, PlanForPatient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-new-treatment-info',
  templateUrl: './new-treatment-info.component.html',
  styleUrls: ['./new-treatment-info.component.scss']
})
export class NewTreatmentInfoComponent implements OnInit {
  canGetInfo = false;
  canGetPlan = false;
  canGetTherapist = false;
  choosedPlan;
  theraPatientList = [];
  planToChoose = [];
  therapistListForPlan = [];
  @Input() Tid = ''; // therapist: Therapist;
  @Input() Pid = ''; // patient: Patient;
  Tname = '';
  Pname = '';

  val;
  startTime = ''; endTime = ''; hours = ''; tDate: Date; discrib = ''; comment = ''; kind = '';
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    } else if (!this.db.userNow.isAdmin) {
      this.getPatientListForThera();
    }
    if (this.Pid) {
      this.canGetPlan = true;
    }
  }
saveNewtreatment() {
  const progressCode = this.getPlanDocId();
const treat = {
  Pid: '' + this.Pid,
  Tid: '' + this.Tid,
  progressionCode: progressCode,
  kind: this.kind,
  treatmentNumber: new Date().toString(), // timestemp
  treatDate: this.tDate,
  startTime: this.startTime,
  endTime: this.endTime,
  hours: this.hours,
  description: this.discrib,
  comment: this.comment
};
 const updatedHoursLeft = this.choosedPlan.hoursLeft - +this.hours;
  this.db.getPlanForPatientRef(this.Pid).doc<PlanForPatient>(this.getPlanDocId()).update({ hoursLeft: updatedHoursLeft})
this.db.addTreatmentInfo(treat);
this.sd.createAlert('success', 'דיווח נשמר בהצלחה', '');
// this.sd.routeTo('/home');
this.cleanForm();
}
  cleanForm() {
    this.Tid = '';
    // this.Pid = '';
    this.Tname = '';
    this.Pname = '';

    this.startTime = '';
    this.endTime = '';
    this.hours = '';
    this.tDate = new Date();
    this.discrib = '';
    this.comment = '';
    this.kind = '';
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
console.log(P);
console.log(this.theraPatientList);
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
          this.canGetPlan = true;
          this.canGetTherapist = false;
            this.canGetInfo = false;
            this.cleanForm();
        },
          error => {
            this.sd.createAlert('error', 'שגיאה בעיבוד נתונים- נא בדוק את הקלט ונסה שוב', '');
          });

  }

  choosePlanForUser() {
     this.canGetPlan = true;
     this.canGetInfo = false;
     this.cleanForm();
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
  this.getTherapistsForPlan();
    }
  }

  getPlanForUser(_plan) {
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
   
  }

  rechoosePlan() {
    console.log('inrechoose');
    this.canGetInfo = false;
    this.canGetPlan = true;
    this.canGetTherapist = false;
    this.choosedPlan = undefined;
    this.cleanForm();
  }


  getTherapistsForPlan() {
    Object.keys(this.choosedPlan).forEach(key => {
 // check if this is a therapist
 if (key.split('_')[1] === 'THERAPIST') {
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
}
