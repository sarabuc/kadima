import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  fname = '';
  lname = '';
  allP: Patient[];
  status;
  constructor(public sd: ShareDataService, public db: DbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.status = this.route.snapshot.params['status'];
    if (!this.status) {
      this.router.navigate(['/']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
  }
}
  isFnPrefix(fn) {
    const filter = this.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
  }
  isLnPrefix(ln) {
    const filter = this.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
  }
checkAndRoute(pat) {
  if (this.status === 'card') {
    this.router.navigate(['Pcard', pat]);
  } else if (this.status === 'plan') {
    this.router.navigate(['plan', pat]);
  } else {
    this.router.navigate(['/']);
  }

}
 /* getAllP() {
    this.db.allPatientsRef.valueChanges().subscribe(pats => {
      this.allP = pats;
    });
  }*/
}
