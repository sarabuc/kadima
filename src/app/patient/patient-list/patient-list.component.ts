import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  fname = '';
  lname = '';
  grade = '';
  findByCategory;
  patientList: any[];
  status;
  findedPatientForDiff = [];
  constructor(public sd: ShareDataService, public db: DbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    
    this.status = this.route.snapshot.params['status'];
    if (!this.status) {
      this.router.navigate(['/home']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
  }
    this.patientList = this.db.allPatientList;

}

// for search
  isGradePrefix(grade) {
    const filter = this.grade.toUpperCase();
    return (grade.toUpperCase().indexOf(filter) > -1);
  }
  isFnPrefix(fn) {
    const filter = this.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
  }
  isLnPrefix(ln) {
    const filter = this.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
  }
  isPidExist(Pid) {
    return (this.findedPatientForDiff.indexOf(Pid) > -1) || (!this.findByCategory) || (this.findByCategory === 'empty');
  }

checkAndRoute(pat) {
  if (this.status === 'card') {
    this.router.navigate(['Pcard', pat]);
  } else if (this.status === 'plan') {
    this.router.navigate(['plan', pat]);
  } else {
    this.router.navigate(['/home']);
  }

}
 public findPatientsForDiffi() {
   if (this.findByCategory && this.findByCategory !== 'empty') {
     this.findedPatientForDiff = undefined;
     console.log('cate' + this.findByCategory);
     const findPat = firebase.functions().httpsCallable('getPatByDiffi');
     findPat({ text: this.findByCategory }).then(res => {
       console.log(res);
       this.findedPatientForDiff = res.data;

     }).catch(err => {
       console.log(err);
     });
   }
   
}
}
