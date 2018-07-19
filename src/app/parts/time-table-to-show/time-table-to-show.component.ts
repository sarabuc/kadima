import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'app-time-table-to-show',
  templateUrl: './time-table-to-show.component.html',
  styleUrls: ['./time-table-to-show.component.scss']
})
export class TimeTableToShowComponent implements OnInit {
@Input() timeStr;
table: boolean[][];
  constructor(public sd: ShareDataService) { }

  ngOnInit() {
  this.table = this.sd.parseTimeFromStr(this.timeStr);

  }

}
