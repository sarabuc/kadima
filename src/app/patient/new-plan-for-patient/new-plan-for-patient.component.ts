import { Component, OnInit } from '@angular/core';
import { DbService, Patient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-new-plan-for-patient',
  templateUrl: './new-plan-for-patient.component.html',
  styleUrls: ['./new-plan-for-patient.component.css']
})
export class NewPlanForPatientComponent implements OnInit {
pat: Patient;
Pid;
status;
  constructor(public sd: ShareDataService, public db: DbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Pid = this.route.snapshot.params['id'];
    if (!this.Pid) {
      this.router.navigate(['/home']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');

    } else {
      this.getPatientByID();
    }
  }


  getPatientByID() {

    this.db.allPatientsRef.doc<Patient>('' + this.Pid).valueChanges().subscribe(P => {
      this.pat = P;

    });
  }

  finishPlan() {




    // ...
    this.sd.routeTo('/Pcard', this.Pid);
  }

}
