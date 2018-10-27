import { Component, OnInit, Input } from '@angular/core';

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
pickerHour;
dates = ['מחר', 'עוד יומיים', 'שבוע הבא', 'עוד שבועיים', 'עוד חודש ', 'עוד חודשיים', 'עוד חצי שנה', 'אחר'];
hours = ['8:00', '10:00', '12:00', '15:00', '20:00', 'אחר'];
 hebrew: any;
  constructor() { }

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
        this.hebrew = {
            firstDayOfWeek: 0,
            dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
            dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'],
            dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'],
            monthNames: [ 'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר' ],
            monthNamesShort: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
            today: 'היום',
            clear: 'נקה'
        };
    }


    saveMassage() {
      // have to check date
      switch (this.selectedDate) {
        case 'other':
          if (this.dateChoice === 'number') {

          } else if (this.dateChoice === 'picker') {

          }

          break;
      
        default:
          break;
      }
    }
}
