import { Component, OnInit } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  readData: boolean;
  Pid: string;
  pat: Patient;


  constructor(private router: Router, private route: ActivatedRoute, public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    this.Pid = this.route.snapshot.params['id'];
    if (!this.Pid) {
      this.router.navigate(['/']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
    }
    this.getPatientByID();
    this.sd.activeTabIndex = 0;

  }


  getPatientByID() {
    // get one therapist by id:
    this.readData = true;
   this.db.allPatientsRef.doc<Patient>('' + this.Pid).valueChanges().subscribe(P => {
      this.pat = P;
      this.readData = false;
    });
  }
}
