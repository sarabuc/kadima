import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common'
// import { AlertsService } from '@jaspero/ng2-alerts';
// import { AlertType } from '@jaspero/ng-alerts';
import { Difficulty, PatientsDifficult, TherapistMethods } from './db.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Injectable()
export class ShareDataService {
  msgs; // for all alerts

  // for free time
  TPstatusForTime: string; /*newP, newT, updateP, updateT */

// for therapist and patient card
  activeTabIndex = 0;
// const for enter free all the time - with '-' between hours and # betwwen days
  FREE_ALL_TIME = '';
  daysWithoutFriday = 5;
  hours = 12;
  fridayHours = 4;
 public dergeeForTherapist = ['ללא דרגה', 'מורה בכיר', 'תואר ראשון', 'תואר שני'];
 public kindOfTherapist = ['מלמד', 'הורה', 'תרפיסט', 'מפקח', 'מנהל', 'פסיכולוג', 'פסיכיאטר', 'מורה מקדם',
'מטפל רגשי', 'חונך', 'רופא משפחה', 'מומחה להתפתחות הילד', 'נוירולוג'];
 public treatmentArea = ['לימודי', 'התפתחותי', 'התנהגותי', 'מוטורי', 'תקשורתי'];
 public kupotCholim = ['ללא', 'מכבי', 'כללית', 'מאוחדת', 'לאומית'];

  public treatmentCategories: Difficulty[] = [
    { code: 'לימודי', description: 'לימודי', Dfather: 'null'},
    { code: 'התפתחותי', description: 'התפתחותי', Dfather: 'null'},
    { code: 'התנהגותי', description: 'התנהגותי', Dfather: 'null'},
    { code: 'תקשורתי', description: 'תקשורתי', Dfather: 'null'},
    { code: 'חושי-מוטורי', description: 'חושי-מוטורי', Dfather: 'null'},

    // {"קריאה"},{"כתיבה"}, {"התנהגות"}, {"קשב וריכוז"}, {"שמיעה"},{"ראיה"},{"פיגור"}, {"אוטיזם"}
  ];

public daysName = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
public hourInDayName = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30' ];
  constructor(/*private _alert: AlertsService*/ private router: Router, private messageService: MessageService, public datepipe: DatePipe) {
    this.initFREE_ALL_TIME();
  }


  /****************************************************************** */
  /***************             alert             **************** */
   public createAlert(type, message, tytle) {
     this.messageService.add({ severity: type, summary: tytle, detail: message });
    /*if (tytle === '') {
    //  this._alert.create(type, message);
    } else {
    //  this._alert.create(type, message, tytle);
    }*/
  }

  initFREE_ALL_TIME() {
    for (let i = 0; i < this.daysWithoutFriday; i++) {
      for (let j = 0; j < this.hours; j++) {
        this.FREE_ALL_TIME = this.FREE_ALL_TIME + '1-';
      }
      this.FREE_ALL_TIME = this.FREE_ALL_TIME + '#';
    }

   for (let j = 0; j < this.fridayHours; j++) {
      this.FREE_ALL_TIME = this.FREE_ALL_TIME + '1-';
    }
  }


  parseTimeToStr(table: boolean[][]) {
     let str = '';
    for (let i = 0; i < table.length - 1; i++) {
      for (let j = 0; j < table[i].length; j++) {
        if (table[i][j]) {
          str = str + '1-';
        } else {
          str = str + '0-';
        }
      }
      str = str + '#';
    }

    for (let j = 0; j < this.fridayHours; j++) {
      if (table[table.length - 1][j]) {
       str = str + '1-';
      } else {
        str = str + '0-';
      }
    }
    return str;
  }

  parseTimeFromStr(strTime: string) {

    const arrDay = strTime.split('#');
    let tmpDay;
    const table: boolean[][] = [];
    let i = 0;
    for (; i < this.daysWithoutFriday; i++) {
      tmpDay = arrDay[i].split('-');
      const day = [];
      for (let j = 0; j < this.hours; j++) {
        if (tmpDay[j] === '1') {
          day.push(true);
        } else {
          day.push(false);
        }
      }
      table.push(day);
    }

    // friday
    tmpDay = arrDay[i].split('-');
    const friday = [];
    for (let j = 0; j < this.fridayHours; j++) {
      if (tmpDay[j] === '1') {
        friday.push(true);
      } else {
        friday.push(false);
      }
    }
    table.push(friday);

    return table;
  }
  /**
   * routeTo
   */
  public routeTo(path: string, param?: string) {
    if (param) {
      this.router.navigate([path, param]);
    } else {
      this.router.navigate([path]);
    }

  }

public convertDateToString(date: Date) {
 // console.log(date);
 return this.datepipe.transform(date, 'dd-MM-yyyy');
}

}
