import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../services/db.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  @Input() pat: Patient;
  @Input() Pid: string;
  constructor() { }

  ngOnInit() {
    this.Pid = this.pat.id;
  }

}
