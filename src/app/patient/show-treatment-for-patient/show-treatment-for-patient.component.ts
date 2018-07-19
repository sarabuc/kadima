import { Component, OnInit, Input } from '@angular/core';
import { DbService, TreatmentInfo } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-show-treatment-for-patient',
  templateUrl: './show-treatment-for-patient.component.html',
  styleUrls: ['./show-treatment-for-patient.component.css']
})
export class ShowTreatmentForPatientComponent implements OnInit {

  constructor(public db: DbService, public sd: ShareDataService) { }
@Input() Pid: string;
Tid: string;
treatDate: Date;
kind: string;
treatments: TreatmentInfo[];
treatmentsRef: any;
  ngOnInit() {
    this.getTreatByPatientId();
  }


  getTreatByPatientId() {
    this.treatmentsRef = this.db.afs.collection('treatmentInfo', ref => {
      return ref.where('Pid', '==', this.Pid).orderBy('treatDate', 'desc');
    });
    this.treatmentsRef.valueChanges().subscribe(treat => {
     // console.log(treat);
      this.treatments = treat;
    });
  }



  checkFilter(treat: TreatmentInfo, date) {
    if (this.Tid) {
      if (this.Tid !== treat.Tid) {
        return false;
      }
    }
    if (this.kind) {
      if (this.kind !== treat.kind) {
        return false;
      }
    }

    if (this.treatDate) {

      if (this.treatDate !== date) {
        return false;
      }
    }
    return true;
  }

}
