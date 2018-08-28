import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult } from '../../services/db.service';
import { DifficultComponent } from '../difficult/difficult.component';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-show-difficulties',
  templateUrl: './show-difficulties.component.html',
  styleUrls: ['./show-difficulties.component.scss']
})
export class ShowDifficultiesComponent implements OnInit {
  @Input() status: string; // mipuy for mipuy and show for handle difficults
  @Input() Pid: string;
  @Output() finishedMipuy = new EventEmitter();
  @ViewChild(DifficultComponent) diff: DifficultComponent;
  @ViewChild(DifficultComponent) diff2: DifficultComponent;

  diffiArr: string[] = [];
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
this.db.newMipuy = [];
// console.log(this.diff2);
// this.diff.isChoozen = false;

  }

  init() {
    this.db.newMipuy = [];
    console.log(this.diff2);
    this.diff.isChoozen = false;
  }
  // addToTempList(code: string) {
  //   if (this.diffiArr.indexOf(code) > -1) {
  //     this.diffiArr.push(code);
  //   }
  // }
  // removeFromTempList(code: string) {
  //   const index = this.diffiArr.indexOf(code);
  //   if (index > -1) {
  //     this.diffiArr.splice(index, 1);
  //   }
  // }

  addNewMipuy() {

    if (status === 'show') {
      return;
    }

    this.finishedMipuy.emit('finish');
    const date =  new Date();
    this.db.mipuyForPatientRef.add({Pid: '' + this.Pid, mipuyDate: date });
    this.diffiArr = this.db.newMipuy;
    this.db.newMipuy = [];
	  console.log(this.db.newMipuy);
	 // console.log("1111111111111111111111111111111111111111");
    let diffi: PatientsDifficult;

      diffi = {
        Dcode: '',
        Pid: '' +  this.Pid,
        mipuyDate: date
      };

      this.diffiArr.forEach(dif => {

        diffi.Dcode = dif;
		console.log(diffi);
        this.db.addPatientDifficult(diffi);
      });
      this.sd.createAlert('success', 'מיפוי הוסף בהצלחה', '');
      // this.init();
  }

}
