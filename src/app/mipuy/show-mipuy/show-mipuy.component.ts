import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult, Difficulty, MipuyDecideForPlan } from '../../services/db.service';
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-show-mipuy',
  templateUrl: './show-mipuy.component.html',
  styleUrls: ['./show-mipuy.component.css']
})
export class ShowMipuyComponent implements OnInit, OnChanges{
  @Input() Pid: string;
  // diffiArr: PatientsDifficult[] = [];
  @Input() mipuyDate: Date;
  @Input() mipuyData: any;
  @Input() status: string;
  @Output() updateDiffForPlan = new EventEmitter();
  // @Output() initDiffForPlan = new EventEmitter();
  currectArea = '';

  // difficultForPatientRef: any;
  mipuyModeClass = 'modal fade in show'; // when opened it is "modal fade in show"
  mainDifToChooseTreat;
  diffiToChooseTreat;
  mipuyDecideForPlan: MipuyDecideForPlan = {mipuy_id_in_db: ''};
  selectedDifToRemainLater;
remainDate;

  constructor(public db: DbService, public sd: ShareDataService, private datePipe: DatePipe) { }


  ngOnInit() {
    this.mipuyDecideForPlan.mipuy_id_in_db = '' + this.Pid + '_' + this.mipuyDate;
  }
  ngOnChanges() {
    console.log('in changes5555555555555555555555555555555555555555');
    const keys = Object.keys(this.mipuyData);
    const i = keys.indexOf('mipuyDate');
    keys.splice(i, 1);
    for (const k of keys) {
      this.mipuyDecideForPlan[k] = 'no';
    }
    console.log(this.mipuyDecideForPlan);
   // this.initDiffForPlan.emit(this.mipuyDecideForPlan);
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
    this.db.updateMipuyDecideForPlanOfPatient(this.mipuyDecideForPlan, this.Pid);
    this.updateDiffForPlan.emit(this.mipuyDecideForPlan);
    console.log(this.mipuyDecideForPlan);
  }
  saveDateToRemainPlan() {
this.db.addMassageForUser(this.remainDate,
   ' יש לחזור ולתכנן טיפול עבור התלמיד' + this.Pid + ', בתחום ה' + this.selectedDifToRemainLater, 'info', '');
this.remainDate = null;
}

}
