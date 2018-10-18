import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService } from '../../services/db.service';
@Component({
  selector: 'app-time-table-to-show',
  templateUrl: './time-table-to-show.component.html',
  styleUrls: ['./time-table-to-show.component.scss']
})
export class TimeTableToShowComponent implements OnInit {
@Input() timeStr;
table: boolean[][];
  constructor(public sd: ShareDataService, private db: DbService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  this.table = this.sd.parseTimeFromStr(this.timeStr);

  }

}
