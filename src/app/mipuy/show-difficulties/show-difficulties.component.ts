import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult } from '../../services/db.service';
import { DifficultComponent } from '../difficult/difficult.component';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-show-difficulties',
  templateUrl: './show-difficulties.component.html',
  styleUrls: ['./show-difficulties.component.scss']
})
export class ShowDifficultiesComponent implements OnInit, OnChanges {
  @Input() status: string; // mipuy for mipuy and show for handle difficults
  @Input() Pid: string;
  @Input() dateForMipuyByArea: any;
  @Output() finishedMipuy = new EventEmitter();
  @ViewChild(DifficultComponent) diff: DifficultComponent;
  areaForMipuy: string;
  diffiArr: string[] = [];
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
  this.db.newMipuy = [];
  }

ngOnChanges(changes) {
   if (this.status !== 'mipuy' && this.status !== 'show') {
const temp = this.status.split('*');
if (temp[0] === 'area') {
this.status = 'area';
this.areaForMipuy = temp[1];
return 'area';
}
return null;
}
}

  init() {
    this.db.newMipuy = [];
    this.diff.isChoozen = false;
  }

  addNewMipuy() {
    if (status === 'show') {
      return;
    }
    let date ;
    this.finishedMipuy.emit('finish');
    if (this.status === 'mipuy') {
      date = new Date();
      date.setHours(0, 0, 0, 0);

    } else if (this.status === 'area') {
      date = new Date(this.dateForMipuyByArea);
    } else {
      return;
    }//


    this.diffiArr = this.db.newMipuy;
    if (this.diffiArr.length > 0 && this.status === 'mipuy') {
      this.db.mipuyForPatientRef.doc('' + this.Pid + '_' + date).set({ Pid: '' + this.Pid, mipuyDate: date });
    }

    let diffi: PatientsDifficult;

      diffi = {
        Dcode: '',
        Pid: '' +  this.Pid,
        mipuyDate: date,
        status: 'yes'
      };

      this.diffiArr.forEach(dif => {

        diffi.Dcode = dif;
        this.db.addPatientDifficult(diffi);
      });
      this.sd.createAlert('success', 'מיפוי הוסף בהצלחה', '');
    this.sd.createMessage('warn', 'יש לרענו את הדף כדי לצפות בכל המיפויים  ', 'שים לב');
    this.db.newMipuy = [];

  }

}
