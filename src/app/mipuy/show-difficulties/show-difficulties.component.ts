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

  async addNewMipuy() {
    if (status === 'show') {
      return;
    }
    this.diffis = this.db.newMipuy;
    let date ;
    this.finishedMipuy.emit('finish');
    if (this.status === 'mipuy') {
      date = this.sd.convertDateToStringDD_MM_YYYY(new Date());

    } else if (this.status === 'area') {
      date = this.dateForMipuyByArea;
    } else {
      return;
    }

    this.db.isBusy = true;
    const diffiArr = Object.keys(this.diffis);
    if (diffiArr.length > 0 && this.status === 'mipuy') {
     const docName = '' + this.Pid + '_' + date;
     const mipuy = {
       Pid: '' + this.Pid,
        mipuyDate: date,
     };
     try{
      //if exist 
      await this.db.mipuyForPatientRef.doc(docName).update(mipuy);

     } catch(err) {
       //if not exist 
      await this.db.mipuyForPatientRef.doc(docName).set(mipuy);

     }
      const M = {
        massage: 'לתלמיד בעל מ.ז : ' + this.Pid + ' עודכן מיפוי קשיים אך לא תוכנן טיפול',
        time: new Date(),
        userId: this.db.userNow.mail,
        status: 'planForMipuy',
        insertBy: this.db.userNow.name,
        insertTime: new Date() 
      };
     await this.db.updateAdminMassage('PFM' + docName, M);
    }

    let diffi: PatientsDifficult;

      diffi = {
        Dcode: '',
        Pid: '' +  this.Pid,
        mipuyDate: date,
        status: 'yes',
        degree: 1, 
        insertBy: this.db.userNow.mail, 
        insertTime: new Date()
      };
      for(const dif of diffiArr) {
        diffi.Dcode = dif;
        diffi.degree = this.diffis[dif];
       await this.db.difficultForPatientRef.add(diffi)
      }
      this.sd.createAlert('success', 'מיפוי הוסף בהצלחה', '');
    this.sd.createMessage('warn', 'יש לרענו את הדף כדי לצפות בכל המיפויים  ', 'שים לב');
    this.db.newMipuy = {};
    this.db.isBusy = false;


  }

}
