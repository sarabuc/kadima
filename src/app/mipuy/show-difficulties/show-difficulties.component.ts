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
  diffis: { [k: string]: any } = {};
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    
  this.db.newMipuy = {};
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
    this.db.newMipuy = {};
    this.diff.isChoozen = false;
  }

  addNewMipuy() {
    if (status === 'show') {
      return;
    }
    this.diffis = this.db.newMipuy;
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
    this.db.isBusy = true;
    const diffiArr = Object.keys(this.diffis);
    if (diffiArr.length > 0 && this.status === 'mipuy') {
     console.log('date' + date);
     const docName = '' + this.Pid + '_' + date;
     const mipuy = {
       Pid: '' + this.Pid,
        mipuyDate: date,
        planForPatient: ''
     };
      this.db.mipuyForPatientRef.doc(docName).set(mipuy);
      this.db.getAdminMassagesRef().doc('PFM' + docName).set({
massage: 'לתלמיד בעל מ.ז : ' + this.Pid + ' עודכן מיפוי קשיים אך לא תוכנן טיפול',
time: new Date(),
userId: this.db.userNow.userName,
status: 'planForMipuy', 
insertBy: this.db.userNow.userName,
insertTime: new Date()
      });
    }

    let diffi: PatientsDifficult;

      diffi = {
        Dcode: '',
        Pid: '' +  this.Pid,
        mipuyDate: date,
        status: 'yes',
        degree: 1
      };

      diffiArr.forEach(dif => {

        diffi.Dcode = dif;
        diffi.degree = this.diffis[dif];
        this.db.addPatientDifficult(diffi);
      });
      this.sd.createAlert('success', 'מיפוי הוסף בהצלחה', '');
    this.sd.createMessage('warn', 'יש לרענו את הדף כדי לצפות בכל המיפויים  ', 'שים לב');
    this.db.newMipuy = {};
    this.db.isBusy = false;


  }

}
