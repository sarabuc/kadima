import { Component, OnInit, Input } from '@angular/core';
import { Therapist, Patient } from '../services/db.service';

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
  nameT = '';
  nameP = '';
  date = '';
  val;
  constructor() { }

  ngOnInit() {
  }

}
