import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient, DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-new-treatment-info',
  templateUrl: './new-treatment-info.component.html',
  styleUrls: ['./new-treatment-info.component.scss']
})
export class NewTreatmentInfoComponent implements OnInit {

  @Input() Tid = '';//therapist: Therapist;
  @Input() Pid = ''; //patient: Patient;
  Tname = '';
  Pname = '';

  val;
  startTime = ''; endTime = ''; hours = ''; tDate: Date; discrib = ''; comment = ''; kind = '';
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {

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
this.sd.routeTo('/');
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
}
