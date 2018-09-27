import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult } from '../../services/db.service';
import { DatePipe } from '@angular/common';
import * as firebase from 'firebase';
@Component({
  selector: 'app-show-mipuy',
  templateUrl: './show-mipuy.component.html',
  styleUrls: ['./show-mipuy.component.css']
})
export class ShowMipuyComponent implements OnInit {
@Input() Pid: string;
// diffiArr: PatientsDifficult[] = [];
@Input() mipuyDate: Date;
@Input() mipuyData: any;
currectArea = '';
// difficultForPatientRef: any;
  mipuyModeClass = 'modal fade in show'; // when opened it is "modal fade in show"
  constructor(public db: DbService, public sd: ShareDataService, private datePipe: DatePipe) { }


  ngOnInit() {
    // console.log(this.mipuyDate);
    // if (this.mipuyDate) {
    //   this.getMipuy();

    //  // console.log(this.datePipe.transform(this.mipuyDate,"yyyy-MM-dd")); //output : 2018-02-13
    // } else {
    //   this.sd.routeTo('/home');
    // }

  }

//   public getMipuy() {
//     this.difficultForPatientRef = this.db.afs.collection('patientDifficults', ref => {
//       return ref.where('mipuyDate', '==', this.mipuyDate).where('Pid', '==', this.Pid); //
//       });
//       this.difficultForPatientRef.valueChanges().subscribe(diffs => {
//         this.diffiArr = diffs;
// 		diffs.forEach(e => {
// 			// 	console.log(e);
// 		});
//       });
// }





  closeModal(str: string) {
    // console.log('*********************************************' + str + this.mipuyModeClass);
    if (str === 'finish') {
      this.mipuyModeClass = 'modal fade';
      // this.initDiffiForNewMipuy();
      // this.init();
    }
  }

}
