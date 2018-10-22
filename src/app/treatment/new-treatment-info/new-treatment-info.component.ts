import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient, DbService } from '../../services/db.service';
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
  theraPatientList = [];
  @Input() Tid = '';//therapist: Therapist;
  @Input() Pid = ''; //patient: Patient;
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
    } else if(!this.db.userNow.isAdmin) {
      this.getPatientListForThera()
    }
  }
saveNewtreatment() {
  const progressCode = this.getProgressCode(this.Pid, this.Tid);
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
this.db.addTreatmentInfo(treat);
this.sd.createAlert('success', 'דיווח נשמר בהצלחה', '');
this.sd.routeTo('/home');
}
  cleanForm() {
    this.Tid = '';
    this.Pid = '';
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
  getProgressCode(Pid, Tid) {
    return '1';
  }
  getNameOfPatientByPid(Pid) {
    const pat = this.db.allPatientList.find(P => P.id === Pid);
    return pat.firstName + pat.lastName;
  }


  getPatientListForThera() {
//this.db.getPlanForPatientRef()
  }
}
