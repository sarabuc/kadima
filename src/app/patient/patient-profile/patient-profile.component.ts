import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  @Input() pat: Patient;
  @Input() Pid: string;
  constructor(public db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
    this.Pid = this.pat.id;
  }
editPatient() {
  this.sd.activeTabIndex = 1;
}

deletePatient() {
  this.db.deletePatient(this.pat.id);
  this.sd.routeTo('/');
}
}
