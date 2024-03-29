import { Component, OnInit, Input } from '@angular/core';
import { DbService, Patient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
 @Input() pat: Patient;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }
updatePatient() {
  this.db.updatePatient(this.pat);
  this.sd.activeTabIndex = 0;
}


  cleanForm() {

    this.pat.id = '';
    this.pat.firstName = '';
    this.pat.lastName = '';
    this.pat.fathersName = '';
    this.pat.fathersPhone = '';
    this.pat.mothersPhone = '';
    this.pat.birthDate = new Date().toString();
    this.pat.grade = '';
    this.pat.comment = '';
    this.pat.kupatCholim = '';

  }
}
