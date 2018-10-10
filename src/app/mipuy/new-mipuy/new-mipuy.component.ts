import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit} from '@angular/core';
import { ShowDifficultiesComponent } from '../show-difficulties/show-difficulties.component';

import { DbService, Patient, PatientsDifficult } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-new-mipuy',
  templateUrl: './new-mipuy.component.html',
  styleUrls: ['./new-mipuy.component.css']
})
export class NewMipuyComponent implements OnInit {
   @ViewChild(ShowDifficultiesComponent) showDif: ShowDifficultiesComponent;
  text: string[];
  patientsForMipuy: Patient[];
  results: string[] = ['111', '222', '333'];


   mipuyModeClass = 'modal fade in show'; // when opened it is "modal fade in show"
  fname = ''; // for search
  lname = ''; // for serach
  grade = ''; // for search
  patientState: string;
selectedcomm = '';
showWho = 'all';
comments: string[] = ['ניכר שיפור', 'לברר מול מורה', 'לדבר עם הורים', 'להעביר לאבחון', 'להעביר לתכנון טיפול'];
Pid;
selectedOptions: string[] = [];
  /****************    FOR FAST MIPUY    **************** */
  checkedFastMipuy = false;
  fastMipuyData: any[] = []; // first col = patient id. and other cols main areas mipuy- yes or no or maybe
  noClass = 'btn btn-outline-secondary btn-sm' ;
  yesClass = 'btn my-button my-primary btn-sm';
  maybeClass = 'btn my-button  btn-sm';
  flagForFastMipuy = []; // flag [i] = true iff pat num i was changed
  constructor(public db: DbService, public sd: ShareDataService) {}
    ngOnInit() {
      this.patientsForMipuy = this.db.allPatientList;
    this.initFastMipuyData();
  }
  search(event) {

  }
  changeFastMipty(Pid: string, mainDiff: string, status: string) {
    // status= yes or maybe - to check in futere or no

  }
  searchSugges(event) {

  }
  saveComments() {
    this.selectedOptions.forEach(element => {
      const com = {
        Pid: this.Pid,
        commentInfo: element,
        commentDate: new Date()
      };
      this.db.addComment(com);

    });
    this.selectedOptions = [];
  }


  onChoosed(have: string, P: Patient) {
    P.haveDificult = have;
 this.db.updatePatient(P);
}

closeModal(str: string) {
  // console.log('*********************************************' + str + this.mipuyModeClass);
  if (str === 'finish') {
 this.mipuyModeClass = 'modal fade';
 // this.initDiffiForNewMipuy();

  }
}

// for search
  isFnPrefix(fn) {
    const filter = this.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
  }
  // for search
  isLnPrefix(ln) {
    const filter = this.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
  }
  // for search
  isGradePrefix(grade) {
    const filter = this.grade.toUpperCase();
    return (grade.toUpperCase().indexOf(filter) > -1);
  }
  initDiffiForNewMipuy() {
   // console.log('inittttttttttttttttt');
    this.showDif = new ShowDifficultiesComponent(this.sd, this.db);
  }

  init() {
    this.db.newMipuy = [];
  }

  changeFastData(newStatus: string, i: number, diffi: any) {
    this.fastMipuyData[i][diffi] = newStatus;
    this.flagForFastMipuy[i] = true;
  }
  saveFastMipuy() {
    const t_date = new Date();
    const date = '' + t_date.getDate() + '/' + (t_date.getMonth() + 1) + '/' + t_date.getFullYear();

    this.fastMipuyData.forEach(pat => {
      let flag = false;
      this.db.treatmentCategories.forEach(diff => {
        if (pat[diff.code] === 'yes') {
          flag = true;
          const newDiff: PatientsDifficult = {
            Pid: '' + pat.Pid,
            Dcode: diff.code,
            mipuyDate: date,
            status: 'yes'
          };
          this.db.addPatientDifficult(newDiff);
          console.log(newDiff);
        }
        if (pat[diff.code] === 'maybe') {
          flag = true;
          const newDiff: PatientsDifficult = {
            Pid: '' + pat.Pid,
            Dcode: diff.code,
            mipuyDate: date,
            status: 'maybe'
          };
          this.db.addPatientDifficult(newDiff);
          console.log(newDiff);
        }
      });
      if (flag) {
        this.db.mipuyForPatientRef.doc('' + pat.Pid + '_' + date).set({ Pid: '' + pat.Pid, mipuyDate: date, planForPatient: '' });
      }
    });
    this.sd.createAlert('success', 'מיפוי הוסף בהצלחה', '');
    this.initFastMipuyData();
  }

  initFastMipuyData() {
    this.fastMipuyData = [];
    this.flagForFastMipuy = [];
    this.patientsForMipuy.forEach(pat => {
      const patData: { [k: string]: any } = {};
      patData['Pid'] = pat.id;
      this.db.treatmentCategories.forEach(diffi => {
        patData[diffi.code] = 'no';
      });
      this.fastMipuyData.push(patData);
      this.flagForFastMipuy.push(false);
    });
  }
}


