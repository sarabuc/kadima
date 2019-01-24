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
  // moved to db service
  // fname = '';
  // lname = '';
  // grade = '';
  // findByCategory;
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
    this.patientList = this.db.filteredPatientList;
    this.status = this.route.snapshot.params['status'];
    if (!this.status) {
      this.router.navigate(['/home']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
  }
  this.getPatList();
   // this.patientList = this.db.allPatientList;

}

// for search
  isGradePrefix(grade) {
    if (grade) {
      const filter = this.db.grade.toUpperCase();
      return (grade.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  isFnPrefix(fn) {
    if (fn) {
    const filter = this.db.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  isLnPrefix(ln) {
    if(ln) {
    const filter = this.db.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
    }
    return false;
  }
  isPidExist(Pid) {
    if(Pid) {
    return (!this.db.findByCategory) || (this.db.findByCategory === 'empty') ||
     (this.findedPatientForDiff.findIndex(P => P.data().Pid ===  Pid) > -1);
    }
    return false;
  }



checkAndRoute(pat) {
  //console.log(this.status);
  this.db.filteredPatientList = this.patientList.filter(P => this.isGradePrefix(P.grade) &&
                                                                  this.isFnPrefix(P.firstName) &&
                                                                   this.isLnPrefix(P.lastName) &&
                                                                     this.isPidExist(P.id));
  if (this.status === 'card') {
    this.router.navigate(['Pcard', pat]);
  } else if (this.status === 'plan') {
    this.router.navigate(['plan', pat]);
  } else if (this.status === 'progress') {
    this.router.navigate(['progress', pat]);
  } else {
    this.router.navigate(['/home']);
  }

}
//  public findPatientsForDiffi2() {
//    if (this.db.findByCategory && this.db.findByCategory !== 'empty') {
//      this.findedPatientForDiff = undefined;
//      //console.log('cate' + this.db.findByCategory);
//      const findPat = firebase.functions().httpsCallable('getPatByDiffi');
//      findPat({ text: this.db.findByCategory }).then(res => {
//        //console.log(res);
//        this.findedPatientForDiff = res.data;

//      }).catch(err => {
//        //console.log(err);
//      });
//    }
   
// }

/**
 * findPatientsForDiffi
 */
async  findPatientsForDiffi() {
  this.db.isBusy = true;
  const db = firebase.firestore();
  const chooseddiffiForPatient = await db.collection('patientDifficults')
    .where('Dcode', '==', this.db.findByCategory).orderBy('mipuyDate', 'desc').get(); 
   this.findedPatientForDiff = chooseddiffiForPatient.docs.filter((value, index, self) => 
                      self.findIndex(D => D.data().Pid === value.data().Pid) === index);
  this.db.isBusy = false;
    // const index2 = '12.10.2017'.split('.').reverse().join().localeCompare('11.11.2017'.split('.').reverse().join());//returned -1
  }
   getPatList() {
     if (this.db.userNow.isAdmin) {
       this.patientList = this.db.allPatientList;
     } else {
       this.db.getPatByTidRef(this.db.userNow.id).valueChanges().subscribe(pats => {
this.patientList = this.db.allPatientList.filter(P => pats.findIndex(pat => pat.Pid === P.id) > -1);
       });
     }
   }
}
