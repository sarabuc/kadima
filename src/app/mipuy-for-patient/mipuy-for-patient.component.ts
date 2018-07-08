import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
import { DbService, PatientsDifficult, Mipuy } from '../services/db.service';
@Component({
  selector: 'app-mipuy-for-patient',
  templateUrl: './mipuy-for-patient.component.html',
  styleUrls: ['./mipuy-for-patient.component.css']
})
export class MipuyForPatientComponent implements OnInit {
@Input() Pid: string;
@Input() status: string; //last or all
mipuyDates: Mipuy[] = [];
mipuyForPatientRef: any;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    console.log(this.status);
    if(!this.status) {
     this.sd.routeTo('/');
    }
    this.getMipuyDate();
  }

  getMipuyDate() {
 this.mipuyForPatientRef = this.db.afs.collection('mipuy', ref => {
      return ref.where('Pid', '==', this.Pid).orderBy("mipuyDate", "desc");
    });
this.mipuyForPatientRef.valueChanges().subscribe(mipuys => {
  this.mipuyDates = mipuys;
  console.log(this.Pid);
  console.log(this.mipuyDates);
});
  }

}
