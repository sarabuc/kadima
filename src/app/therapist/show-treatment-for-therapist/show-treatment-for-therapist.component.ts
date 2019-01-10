import { Component, OnInit, Input } from '@angular/core';
import { TreatmentInfo, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-show-treatment-for-therapist',
  templateUrl: './show-treatment-for-therapist.component.html',
  styleUrls: ['./show-treatment-for-therapist.component.css']
})
export class ShowTreatmentForTherapistComponent implements OnInit {
  @Input() Tid: string;
  Pid: string;
  treatDate: Date;
  kind: string;
  treatments: TreatmentInfo[];
  treatmentsRef: any;
  constructor(public db: DbService, public sd: ShareDataService) { }

    ngOnInit() {
      // guard
      if ((!this.db.isLogin()) || (!this.db.userNow)) {
        // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
        this.sd.routeTo('login');
      }
      this.getTreatByTherapistId();
    }
  
  
   
  
  
  
    
    getTreatmentsArea() {
      return this.treatments.filter((item, pos) => {
          return this.treatments.findIndex(T => item.area === T.area) == pos;
      });
    }
    getTreatmentsDate() {
      return this.treatments.filter((item, pos) => {
          return this.treatments.findIndex(T => item.treatDate === T.treatDate) == pos;
      });
    }
  
  
  
  
 

  getTreatByTherapistId() {
    this.treatmentsRef = this.db.afs.collection('treatmentInfo', ref => {
      return ref.where('Tid', '==', this.Tid).orderBy('treatDate', 'desc');
    });
    this.treatmentsRef.valueChanges().subscribe(treat => {
     // console.log(treat);
      this.treatments = treat;
    });
  }



  checkFilter(treat: TreatmentInfo, date) {
    if (this.Pid) {
      if (this.Pid !== treat.Pid) {
        return false;
      }
    }
    if (this.kind) {
      if (this.kind !== treat.area) {
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


