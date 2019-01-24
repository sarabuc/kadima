import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult, Mipuy, Patient } from '../../services/db.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-mipuy-for-patient',
  templateUrl: './mipuy-for-patient.component.html',
  styleUrls: ['./mipuy-for-patient.component.css']
})
export class MipuyForPatientComponent implements OnInit {
@Input() Pid: string;
@Input() status: string; // last or all
@Input() pat: Patient;
allMipuy: any;
mipuyDates: Mipuy[] = [];
mipuyForPatientRef: any;
 mipuyModeClass = 'modal fade in show top'; // when opened it is "modal fade in show"
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    
     // //console.log(this.status);
    if (!this.status) {
     this.sd.routeTo('/home');
    }
    this.getAllMipuysForPat();

  }

//   getMipuyDate() {
//  this.mipuyForPatientRef = this.db.afs.collection('mipuy', ref => {
//       return ref.where('Pid', '==', this.Pid).orderBy('mipuyDate', 'desc');
//     });
// this.mipuyForPatientRef.valueChanges().subscribe(mipuys => {
//   this.mipuyDates = mipuys;
//   // //console.log(this.Pid);
//  // //console.log(this.mipuyDates);
// });
//   }

getAllMipuysForPat() {
  this.allMipuy = undefined;
  //console.log('get mipuy');
  const mipuyForPatient = firebase.functions().httpsCallable('getMipuysForPatientBySecondAreas');
  mipuyForPatient({ text: this.Pid }).then(res => {
    // for (const mipuy of res.data) {
    //   mipuy.mipuyDate = this.sd.converrSecondsToDateTime(mipuy.mipuyDate._seconds);
    // }
    this.allMipuy = res.data;
    this.allMipuy = this.allMipuy.sort((a, b) => {
     
      const d1 = a.mipuyDate.split('.');
      const d2 = b.mipuyDate.split('.');
   
         if(d1[2] !== d2[2]) {
           return +d2[2] - +d1[2];
         }
         if(d1[1] !== d2[1]) {
           return +d2[1] - +d1[1];
         }
         return +d2[0] - +d1[0];
        });
    //console.log(this.allMipuy);
  }).catch(err => {
    this.allMipuy = 'no internet';
    //console.log(err);
  });
}

  closeModal(str: string) {
  // //console.log('*********************************************' + str + this.mipuyModeClass);
  if (str === 'finish') {
 this.mipuyModeClass = 'modal fade top';
  }
}

updateThereIsDiffi() {
  this.pat.haveDificult = 'yes';
 this.db.updatePatient(this.pat);

}

init() {
this.db.newMipuy = [];
}

}
