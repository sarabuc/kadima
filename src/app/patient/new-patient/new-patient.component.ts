import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { Therapist, DbService, Patient } from '../../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {
  Pid: string;
  firstName: string;
  lastName: string;
  fathersName: string;
  fathersPhone: string;
  mothersPhone: string;
 // address: string;
  kupatCholim: string;
  birthDate: Date;
  grade: string;
  comment: string;
  freeTime: string;

  showMoreOptions = false;
  Tstatus = 'new';

  constructor(public sd: ShareDataService, public db: DbService , private router: Router) {
    /*this.sd.TPstatusForTime = 'newT';
    this.sd.TPidForTime = '0000';
    this.sd.idForDiffiAndMeth = '0000';
    this.sd.statusForDiffiAndMeth = 'newT';*/

   }

  ngOnInit() {
    // init
    this.Pid = '';
    this.firstName = '';
    this.lastName = '';
    this.fathersName = '';
    this.fathersPhone = '';
    this.mothersPhone = '';
    this.birthDate = new Date();
    this.grade = '';
    this.comment = '';
    this.kupatCholim = '';

  }

  cleanForm() {

    this.Pid = '';
    this.firstName = '';
    this.lastName = '';
    this.fathersName = '';
    this.fathersPhone = '';
    this.mothersPhone = '';
    this.birthDate = new Date();
    this.grade = '';
    this.comment = '';
    this.kupatCholim = '';

  }
  saveNewPatient() {
    let pati: Patient;
    const date = this.birthDate.toLocaleDateString();
    // '' + this.birthDate.getDate + '/home' + this.birthDate.getMonth + '/home' + this.birthDate.getFullYear;
    pati = {
      id: '' + this.Pid,
      firstName: this.firstName,
      lastName: this.lastName,
      fathersName: this.fathersName,
      fathersPhone: this.fathersPhone,
      mothersPhone: this.mothersPhone,
      birthDate: date,
      grade: this.grade,
      kupatCholim: this.kupatCholim,
      comment: this.comment,
      haveDificult: 'no',
      strFreeTime: this.sd.FREE_ALL_TIME
      };

    this.db.addPatient(pati);
    this.cleanForm();
   // this.router.navigate(['/home']);
  }

}
