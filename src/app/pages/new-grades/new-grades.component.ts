import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*import '../../../src/assets/js/jquery-validation/dist/jquery.validate.min.js';
import '../../../src/assets/js/jquery-validation/dist/additional-methods.min.js';*/
import { ShareDataService } from '../../services/share-data.service';
import { DbService } from '../../services/db.service';

// import * as $ from 'JQuery';
// import 'jqueryui';
@Component({
  selector: 'app-new-grades',
  templateUrl: './new-grades.component.html',
  styleUrls: ['./new-grades.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewGradesComponent implements OnInit {

  showLoazy = false;
  // dateKind = 'עברי';
  loazyDate;
  selectedDay;
  selectedMonth;
  selectedYear;
  days = [];
  monthes = [];
  years = [];
  // class
  classes = [];
  selectedClass;
  classInMachzor = [];
  selectedClassInMachzor;

  // comment
  comment;

  // area
  testAreaCode;

  grades: any[] = [];

  constructor(public sd: ShareDataService, public db: DbService) { }


  onSelectedClass(event) {
    //console.log(event);
    this.classInMachzor = [];

    this.classInMachzor.push({ label: event.value.label + '-1' });
    this.classInMachzor.push({ label: event.value.label + '-2' });

  }

  onSelectedClassInMachzor(event) {

    this.selectedClassInMachzor = event.value.label;
    this.db.getPatientsByClassRef(event.value.label).valueChanges().subscribe(pats => {
      this.grades = [];
      for (const pat of pats) {
        this.grades.push({
          status: 'ok',
          Pid: pat.id,
          firstName: pat.firstName,
          lastName: pat.lastName,
          doTest: true,
          grade: null,
          comment: null,
          haveDif: pat.haveDificult
        });
      }
    });
  }
  ngOnInit() {
   
      // guard
      if ((!this.db.isLogin()) || (!this.db.userNow)) {
        // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
        this.sd.routeTo('login');
      }

    for (let i = 1; i <= this.sd.hebrewDays.length; i++) {
      this.days.push({ label: this.sd.hebrewDays[i - 1], value: i });
    }
    for (let i = 1; i <= this.sd.hebrewMonthes.length; i++) {
      this.monthes.push({ label: this.sd.hebrewMonthes[i - 1], value: i });
    }
    for (let i = 1; i <= this.sd.hebrewYear.length; i++) {
      this.years.push({ label: this.sd.hebrewYear[i - 1], value: i });
    }
    for (let i = 1; i <= this.sd.classes.length; i++) {
      this.classes.push({ label: this.sd.classes[i - 1], value: i });
    }
  }





  async saveTestGrade() {
    this.db.isBusy = true;
    let flag = '';
    let flagstatus = true;
    // area
    if (!this.testAreaCode) {
      flag = flag + ' ' + 'מקצוע בחינה';
    }
    // date
    if (!this.showLoazy) {
      if (!(this.selectedDay && this.selectedMonth && this.selectedYear)) {
        flag = flag + ' ' + 'תאריך בחינה';
      }
    } else if (this.showLoazy) {
      if (!this.loazyDate) {
        flag = flag + ' ' + 'תאריך בחינה';
      }
    }

    // grades
    for (let i = 0; i < this.grades.length; i++) {
      if (!this.grades[i].grade && this.grades[i].doTest) {
        this.grades[i].status = 'grade';
        flagstatus = false;

      } else if (!(this.grades[i].doTest && this.grades[i].comment)) {
        this.grades[i].status = 'comment';
      } else if ((!this.grades[i].doTest && this.grades[i].comment) || this.grades[i].grade) {
        this.grades[i].status = 'ok';
      }
    }
    if (!flagstatus) {
      flag = flag + ' ' + 'פרטי התלמידים ';
    }
    if (flag) {
      //console.log(flag);
      this.sd.createAlert('error', 'שגיאה בקליטת נתונים נא בדוק ' + flag + 'ונסה שוב', '');
      this.db.isBusy = false;
      return;
    }
    // if all is ok
    if (!this.showLoazy) {
      // have to convrt to loazy
      this.sd.convertHebrewToNormalDate(this.selectedDay, this.selectedMonth - 1, this.selectedYear - 1).then(result => {
        //console.log(result);
        result.subscribe(date => {
          const Lday = (date as any).gd;
          const Lmonth = (date as any).gm;
          const Lyear = (date as any).gy;
          this.loazyDate = '' + Lday + '.' + Lmonth + '.' + Lyear;
          //console.log(this.loazyDate);
          this.saveTest();

        });


      }).catch((err) => {
        this.sd.createAlert('error', ' שגיאה בקליטת תאריך עברי- נסה שוב', '');
      });

    } else {
      this.loazyDate = this.sd.convertDateToStringDD_MM_YYYY(this.loazyDate);
      this.saveTest();
    }
  }

  private saveTest() {
    const userMail = this.db.userNow.mail;
    const timestmp = new Date();
    const code = '' + this.testAreaCode + '_GFP_' + this.loazyDate + '_GFP_' + this.selectedClassInMachzor;
    const test = {
      date: this.loazyDate,
      Dcode: this.testAreaCode,
      Tid: this.db.userNow.name,
      className: this.selectedClassInMachzor,
      testCode: code,
      comment: this.comment ? this.comment : '',
      insertBy: userMail,
      insertTime: timestmp
    };
    //console.log(test);
    this.db.addTest(test).then(async (result) => {
      for (const grade of this.grades) {
        const temp = {
          Pid: grade.Pid,
          grade: grade.grade,
          comment: grade.comment ? grade.comment : '',
          insertBy: userMail,
          insertTime: timestmp,
          testCode: code,
          testDate: this.loazyDate,
          Dcode: this.testAreaCode,
        };
        try {
          this.db.addTestGrade(temp, 'multy');
          if (grade.haveDif === 'yes') {
            // have to leave massage for therapists
            const massage = {
              date: this.loazyDate,
              Pid: grade.Pid,
              patName: grade.firstName + ' ' + grade.lastName,
              area: this.testAreaCode,
              grade: grade.grade,
              comment: grade.comment ? grade.comment : '',
              insertBy: userMail,
              insertTime: timestmp
            };
this.db.addGradeMassageForTherapists(massage);
          }

        } catch (err) {
          this.sd.createAlert('error', 'ארעה שגיאה- נסה שוב', '');
          //console.log(err);

        }
      }
      this.sd.createAlert('success', 'ציוני מבחן נוספו בהצלחה', '');
      this.db.isBusy = false;

    }).catch((err) => {
      this.sd.createAlert('error', 'ארעה שגיאה- נסה שוב', '');
      //console.log(err);
      this.db.isBusy = false;
    });
  }


}

