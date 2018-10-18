import { Component, OnInit, Input } from '@angular/core';
import { TreatmentInfo, DbService, Therapist } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-show-treatment-info',
  templateUrl: './show-treatment-info.component.html',
  styleUrls: ['./show-treatment-info.component.css']
})
export class ShowTreatmentInfoComponent implements OnInit {
  @Input() treat: TreatmentInfo;
  @Input() status: string;
  @Input() this_treatDate: Date;
  constructor(public db: DbService, private sd: ShareDataService) { }


  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    // console.log(this.status);
    if (!this.status) {
      this.status = '';
    }
  }

}
