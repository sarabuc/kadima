import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TreatmentInfo, DbService, Therapist } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-show-treatment-info',
  templateUrl: './show-treatment-info.component.html',
  styleUrls: ['./show-treatment-info.component.css']
})
export class ShowTreatmentInfoComponent implements OnInit, OnChanges {
  @Input() treat: TreatmentInfo;
  @Input() status: string;
  @Input() this_treatDate: string;
  hebrewDate;
  constructor(public db: DbService, private sd: ShareDataService) { }


  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    if (!this.status) {
      this.status = '';
    }
    try {
      this.this_treatDate = this.treat.treatDate;
      const tempD = this.this_treatDate.split('.');
      this.hebrewDate = this.sd.convertDateToHebrewDate(+tempD[0], +tempD[1], +tempD[2]);

    } catch (err) {

    }
  }

  ngOnChanges() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    if (!this.status) {
      this.status = '';
    }
    try {
      this.this_treatDate = this.treat.treatDate;
      const tempD = this.this_treatDate.split('.');
      this.hebrewDate = this.sd.convertDateToHebrewDate(+tempD[0], +tempD[1], +tempD[2]);

    } catch (err) {

    }
   
  }

}
