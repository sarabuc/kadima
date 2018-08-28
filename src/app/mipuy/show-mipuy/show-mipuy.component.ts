import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, PatientsDifficult } from '../../services/db.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-show-mipuy',
  templateUrl: './show-mipuy.component.html',
  styleUrls: ['./show-mipuy.component.css']
})
export class ShowMipuyComponent implements OnInit {
@Input() Pid: string;
// @Input() mipuyStatus: string;
diffiArr: PatientsDifficult[] = [];
@Input() mipuyDate: Date;
difficultForPatientRef: any;
  constructor(public db: DbService, public sd: ShareDataService, private datePipe: DatePipe) { }


  ngOnInit() {
    if (this.mipuyDate) {
      this.getMipuy();
     // console.log(this.datePipe.transform(this.mipuyDate,"yyyy-MM-dd")); //output : 2018-02-13
    } else {
      this.sd.routeTo('/home');
    }

  }

  public getMipuy() {
    this.difficultForPatientRef = this.db.afs.collection('patientDifficults', ref => {
      return ref.where('mipuyDate', '==', this.mipuyDate).where('Pid', '==', this.Pid); //
      });
      this.difficultForPatientRef.valueChanges().subscribe(diffs => {
        this.diffiArr = diffs;
		diffs.forEach(e => {
				console.log(e);
		});
      });
}

}
