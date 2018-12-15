import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, MipuyDecideForPlan, PlanForPatient, Mipuy } from '../../services/db.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-show-mipuy',
  templateUrl: './show-mipuy.component.html',
  styleUrls: ['./show-mipuy.component.css']
})
export class ShowMipuyComponent implements OnInit, OnChanges{
  @Input() Pid: string;
  // diffiArr: PatientsDifficult[] = [];
  @Input() mipuyDate: string;
  hebrewDate;
  @Input() mipuyData: any;
  @Input() status: string;
  @Input() planedDiffi: any[] = [];
  @Output() updateDiffForPlan = new EventEmitter();
  planP: any;

  planFiles = [];
  currectArea = '';

  // difficultForPatientRef: any;
  mipuyModeClass = 'modal fade in show'; // when opened it is "modal fade in show"
  mainDifToChooseTreat;
  diffiToChooseTreat;
  mipuyDecideForPlan: MipuyDecideForPlan = { Pid: '', mipuy_id_in_db: ''};
  selectedDifToRemainLater;
  remainDate;

  constructor(public db: DbService, public sd: ShareDataService, private datePipe: DatePipe) { }


  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    
    this.mipuyDecideForPlan.mipuy_id_in_db = '' + this.Pid + '_' + this.mipuyDate;
    this.mipuyDecideForPlan.Pid =  this.Pid ;
    this.db.getSecondCategories(false);
  }
  ngOnChanges() {
    console.log(this.planedDiffi);
    this.mipuyDecideForPlan.mipuy_id_in_db = '' + this.Pid + '_' + this.mipuyDate;
    this.mipuyDecideForPlan.Pid = this.Pid;
    const keys = Object.keys(this.mipuyData);
    const i = keys.indexOf('mipuyDate');
    keys.splice(i, 1);
    for (const dif of this.planedDiffi) {
      this.mipuyDecideForPlan[dif.Dcode] = dif.value;
    }
    for (const k of keys) {
      if (!this.mipuyDecideForPlan[k]) { // dont was in plan
      this.mipuyDecideForPlan[k] = 'no';
      }
    }
    console.log(this.mipuyDecideForPlan);
    this.getPlanForPatient();
    const tempD = this.mipuyDate.split('.');
    console.log(tempD);
    this.hebrewDate = this.sd.convertDateToHebrewDate(+tempD[0], +tempD[1], +tempD[2]);
  }




  closeModal(str: string) {
    // console.log('*********************************************' + str + this.mipuyModeClass);
    if (str === 'finish') {
      this.mipuyModeClass = 'modal fade';
      // this.initDiffiForNewMipuy();
      // this.init();
    }
  }


 
  onChoosed(decide: string, D: any, picker, form) {

    if (decide === 'later') {
      this.selectedDifToRemainLater = D;
      form.show();
      picker.open();
    }
    this.mipuyDecideForPlan[D] = decide;
   // this.db.updateMipuyDecideForPlanOfPatient(this.mipuyDecideForPlan, this.Pid);
    this.updateDiffForPlan.emit(this.mipuyDecideForPlan);
    console.log(this.mipuyDecideForPlan);
  }
  saveDateToRemainPlan() {
this.db.addMassageForUser(this.remainDate,
   ' יש לחזור ולתכנן טיפול עבור התלמיד' + this.Pid + ', בתחום ה' + this.selectedDifToRemainLater, 'info', '');
this.remainDate = null;
}


async  getPlanForPatient() {
  if (this.status === 'plan') {
    return; // call this func only once
  }
  let plan_docName;
  this.db.mipuyForPatientRef.doc<Mipuy>(this.mipuyDecideForPlan.mipuy_id_in_db).valueChanges().subscribe(mipuy => {
    console.log('mipuy');
    plan_docName = mipuy.planForPatient;
    if (plan_docName === '') {
      this.planP = 'empty';
      return;
    }
    this.db.getPlanForPatientRef(this.Pid).doc<PlanForPatient>(plan_docName).valueChanges().subscribe(plan => {
      this.planP = plan;
      console.log(this.planP);
      this.planedDiffi = [];
      Object.keys(this.planP).forEach(key => {
        if (this.planP[key] === 'yes') { // this is a diffi was planed
          const Tkey = key + '_THERAPIST';
          const Mkey = key + '_METHOD';
          this.planedDiffi.push({ code: key, method: this.planP[Mkey], thera: this.planP[Tkey]});
        }
        if (this.planP[key] === 'file') { // this is a file
            this.planFiles.push({file: key, fileName: this.getFileName(key)});
            console.log(this.planFiles);
        }
      });
      console.log(this.planedDiffi);
    });
  });
 

  }

  updatePlan() {
    this.sd.routeTo('updatePlan', this.planP.mipuy_id_in_db + '_P_' + this.planP.date);
  }
  getFileName(file: string) {
return file.split('_dot_')[0];
  }
  dawnloadFile(file: string, fileName: string) {
    const re = /_dot_/gi;
    fileName = fileName.replace(re, '.');
    this.sd.getAndDownloadFile( this.Pid + '/' + file, fileName, 'dawn');
  }
  showFileInBrouser(file) {
    this.sd.getAndDownloadFile(this.Pid + '/' + file, '',  'open');
  }
 
}
