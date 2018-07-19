import { Component, OnInit, Input } from '@angular/core';
import { DbService, Therapist, Patient } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-free-time',
  templateUrl: './free-time.component.html',
  styleUrls: ['./free-time.component.scss']
})
export class FreeTimeComponent implements OnInit {
dbs: DbService;
days: string[] ; // = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
// hours = 12;
lessons: string[]; /* = ['9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
 '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00'];*/
 freeTime: boolean[][] = [];
 @Input() status: string;
 @Input() id: string;
 @Input() therapist: Therapist;
 @Input() patient: Patient;

  constructor(private db: DbService, private sd: ShareDataService, private router: Router) {
   this.dbs = db;
   this.lessons = this.sd.hourInDayName;
   this.days = this.sd.daysName;


}

  ngOnInit() {
    if (this.status === 'newT' || this.status === 'newP') {
      this.freeTime = this.sd.parseTimeFromStr(this.sd.FREE_ALL_TIME);
      // this.createTime();
    } else if (this.status === 'updateT' || this.status === 'updateP') {
      this.getTableFromDB();
    } else {

    }
    console.log(this.status);
    console.log(this.id);
  }

  /*createTime() {
  for (let i = 0; i < this.days.length; i++) {
  const day = [];
    for (let j = 0; j < this.lessons.length; j++) {
      day.push(false);
    }
    this.freeTime.push(day);
   }
  }*/
  getTableFromDB() {
    this.dbs.isBusy = true;
    // get from db

    if (this.status === 'updateT') {
        console.log(this.therapist);
        this.freeTime = this.sd.parseTimeFromStr(this.therapist.strFreeTime);
        this.dbs.isBusy = false;

    } else if (this.status === 'updateP') {
        this.freeTime = this.sd.parseTimeFromStr(this.patient.strFreeTime);
        this.dbs.isBusy = false;

    } else {
      this.dbs.isBusy = false;
      return;
    }
  }

  checkAll() {
    for (let i = 0; i < this.days.length; i++) {
      for (let j = 0; j < this.lessons.length; j++) {
        this.freeTime[i][j] = true;
      }
  }
}
  clearAll() {
    for (let i = 0; i < this.days.length; i++) {
      for (let j = 0; j < this.lessons.length; j++) {
        this.freeTime[i][j] = false;
      }
    }
  }

  /**
   * showTime: strTime looks like "0-0-1-1-1-1#1-0-1-0-1-1-1#0-0-0-0-1-1......." - #netween days and - between lessons
   */
  public showTime(strTime: string) {
    this.sd.parseTimeFromStr(strTime);
  }

  setFreeHour(day, lesson) {
    this.freeTime[day][lesson] = !this.freeTime[day][lesson];
  }

  saveNewFreeTime() {

  }

  updateFreeTime() {
    this.sd.activeTabIndex = 0;
    console.log(this.status);
    this.dbs.isBusy = true;
    const str = this.sd.parseTimeToStr(this.freeTime);
    if (this.status === 'updateT') {
      this.therapist.strFreeTime = str;
      this.dbs.updateTherapist(this.therapist);
    } else if (this.status === 'updateP') {
      this.patient.strFreeTime = str;
      this.dbs.updatePatient(this.patient);
    } else { // newT????????????????/ newP????????????????????????/
      this.dbs.isBusy = false;
      return;
    }

  }




}


