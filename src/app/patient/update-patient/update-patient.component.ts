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
  }
updatePatient() {
  this.db.updatePatient(this.pat);
  this.sd.activeTabIndex = 0;
}
}
