import { Component, OnInit } from '@angular/core';
import {  ViewChild, AfterViewInit} from '@angular/core';
import { ShowDifficultiesComponent } from '../show-difficulties/show-difficulties.component';

import { DbService, Patient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-new-mipuy',
  templateUrl: './new-mipuy.component.html',
  styleUrls: ['./new-mipuy.component.css']
})
export class NewMipuyComponent implements OnInit {
   @ViewChild(ShowDifficultiesComponent) showDif: ShowDifficultiesComponent;
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
tooltip = '12345';
  constructor(public db: DbService, public sd: ShareDataService) {}
    ngOnInit() {

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
 this.init();
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
}


