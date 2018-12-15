import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-create-massage-for-user',
  templateUrl: './create-massage-for-user.component.html',
  styleUrls: ['./create-massage-for-user.component.css']
})
export class CreateMassageForUserComponent implements OnInit {
  @Input() massage: string;
  @Input() userMail: string;
   date;
   comment;
   hour;

  dateChoice; // number or picker
  hourChoice; // mask or picker
 
otherDate = false;
otherHour = false;
selectedDate;
numberForDate;
pickerDate;

selectedHour;
maskForHour;
pickerHour = '00:00';
dates = ['מחר', 'עוד יומיים', 'שבוע הבא', 'עוד שבועיים', 'עוד חודש ', 'עוד חודשיים', 'עוד חצי שנה', 'אחר'];
hours = ['8:00', '10:00', '12:00', '15:00', '20:00', 'אחר'];
 hebrew: any;
  constructor( private db: DbService, public sd: ShareDataService) { }

  onSelectedDate(event) {
    if (event === 'אחר') {
      this.otherDate = true;
      this.selectedDate = 'other';
    } else {
      this.otherDate = false;
      this.selectedDate = event;
    }
  }
  onSelectedHour(event) {
    if (event === 'אחר') {
      this.otherHour = true;
      this.selectedHour = 'other';
    } else {
      this.otherHour = false;
      this.selectedHour = event;
    }
  }
 

    ngOnInit() {
       
    }


    saveMassage() {
      // have to check date
      let date = new Date();
      switch (this.selectedDate) {
        case 'other':
          if (this.dateChoice === 'number') {
            date.setDate(date.getDate() + this.numberForDate);

          } else if (this.dateChoice === 'picker') {
          date = this.pickerDate;
          }

          break;
      
         case 'מחר':
          date.setDate(date.getDate() + 1);
            break;
            case 'עוד יומיים':
            date.setDate(date.getDate() + 2);
          break;
            case 'עוד שבוע':
            date.setDate(date.getDate() + 7);
          break;
            case 'עוד שבועיים':
            date.setDate(date.getDate() + 14);
          break;
            case 'עוד חודש':
            date.setMonth(date.getMonth() + 1);
          break;
            case 'עוד חודשיים':
           date.setMonth(date.getMonth() + 2);
          break;
            case 'עוד חצי שנה':
            date.setMonth(date.getMonth() + 6);
          break;
      }

let hour = 0;
      // get hour
        switch (this.selectedHour) {
        case 'other':
          if (this.hourChoice === 'mask') {
            hour = this.maskForHour.split(':')[0];
            date.setHours(hour);
          }
          break;
      
         default:
          hour = this.selectedHour.split(':')[0];
          date.setHours(hour);

            break;
    }



    const massage = {
      status: 'users',
      time: date,
      year : date.getFullYear(),
      month: date.getMonth(), // gave month-1
      dateInMonth: date.getDate(),
      hour: hour,
      userId: this.db.userNow.mail,
      massage: this.massage? this.massage: 'הודעת משתמש',
      comments: this.comment,
      insertBy: this.db.userNow.mail,
      insertTime: new Date()
    };

    this.db.addMassage(massage);
    this.sd.createAlert('success', 'הודעה נוספה בהצלחה', '');
  }
}
