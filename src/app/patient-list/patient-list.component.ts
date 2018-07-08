import { Component, OnInit } from '@angular/core';
import { Patient, DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  fname = '';
  lname = '';
  allP: Patient[];
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
   // this.getAllP();
  }
  isFnPrefix(fn) {
    const filter = this.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
  }
  isLnPrefix(ln) {
    const filter = this.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
  }

 /* getAllP() {
    this.db.allPatientsRef.valueChanges().subscribe(pats => {
      this.allP = pats;
    });
  }*/
}
