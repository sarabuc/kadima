import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient, DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-new-treatment-info',
  templateUrl: './new-treatment-info.component.html',
  styleUrls: ['./new-treatment-info.component.scss']
})
export class NewTreatmentInfoComponent implements OnInit {

  @Input() Therapist: Therapist;
  @Input() patient: Patient;
  Tid = '';
  Pid = '';
  Tname = '';
  Pname = '';
  date = '';
  val;
  startTime; endTime; hours; tDate; discrib; comment; kind;
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
  }

}
