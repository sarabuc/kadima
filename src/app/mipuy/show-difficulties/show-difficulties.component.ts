import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult } from '../../services/db.service';
import { DifficultComponent } from '../difficult/difficult.component';


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
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    
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
    this.diffiArr = this.db.newMipuy;
    let date ;
    this.finishedMipuy.emit('finish');
    if (this.status === 'mipuy') {
     const t_date = new Date();
      date = '' + t_date.getDate() + '.' + (t_date.getMonth() + 1) + '.' + t_date.getFullYear();

    } else if (this.status === 'area') {
      date = this.dateForMipuyByArea;
    } else {
      return;
    }//

console.log('date' + date);
   if (this.diffiArr.length > 0 && this.status === 'mipuy') {
     console.log('date' + date);
     const docName = '' + this.Pid + '_' + date;
     const mipuy = {
       Pid: '' + this.Pid,
        mipuyDate: date,
        planForPatient: ''
     };
      this.db.mipuyForPatientRef.doc(docName).set(mipuy);
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
