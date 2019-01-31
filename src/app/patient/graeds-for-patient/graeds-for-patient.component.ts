import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { DbService, Patient, GradeForPatient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
// RxJs 6.x+ import paths
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-graeds-for-patient',
  templateUrl: './graeds-for-patient.component.html',
  styleUrls: ['./graeds-for-patient.component.css']
})
export class GraedsForPatientComponent implements OnInit, OnChanges, OnDestroy {
  private ngUnsubscribe = new Subject();
  @Input() pat: Patient;
  @Input() Pid: string;
  @Input() status: string;
  mainDiffi = [];
  sortBy = ['מיון לפי מקצוע', 'מיון לפי תאריך'];
  sortByValue = 'מיון לפי תאריך';
  allGrades: GradeForPatient[];
  newGrade;
  selectedGrade;
  displayDialog = false;
  gradeFilter;
  yearTimeout: any;
  textForGradeFilter = 'ציונים מעל:0';
  constructor(private db: DbService, public sd: ShareDataService) { }
 
  ngOnInit() {
  }

  ngOnChanges() {
   this.db.getGradesForPidRef(this.Pid).valueChanges().subscribe(grades => {
      this.allGrades = grades;
      //console.log(this.allGrades);
      
    // this.sortByTestDate();
    });
  }

//   changeSortBy(event) {
// if (event === 'מיון לפי תאריך') {
// this.sortByTestDate();
// } else if (event === 'מיון לפי מקצוע') {
// this.sortByArea();
// }
//   }



  // sortByInsertDate() {
  //   this.allGrades.sort((a, b) => {
  //     if (a.insertTime.getTime() > b.insertTime.getTime()) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  // }

  // sortByTestDate() {
  //   this.allGrades.sort((a, b) => {
  //     if (a.testDate.localeCompare(b.testDate) !== 0) {
  //       return a.testDate.localeCompare(b.testDate);
  //     } else {
  //       return a.Dcode.localeCompare(b.Dcode);
  //     }
  //   });
  // }
  // sortByArea() {
  //   this.allGrades.sort((a, b) => {
  //     if (a.Dcode.localeCompare(b.Dcode) !== 0) {
  //       return a.Dcode.localeCompare(b.Dcode);
  //     } else {
  //       return a.testDate.localeCompare(b.testDate);
  //     }
  //   });
  // }

  showDialogToAdd() {
    this.newGrade = true;
    this.selectedGrade = {
      testDate: new Date(),
      grade: 0,
      Dcode: '',
      comment: ''
    };
  //  this.displayDialog = true;
  }

  saveNew(option, dialog) {
   
    if (this.newGrade) {
      this.selectedGrade['insertBy'] = this.db.userNow.mail;
      this.selectedGrade['insertTime'] = new Date();
      if (!this.selectedGrade.grade ) {

        this.sd.createAlert('error', 'לא הוכנס ציון מבחן', '');
        return;
      } 
      if (!this.selectedGrade.Dcode) {

        this.sd.createAlert('error', 'לא הוכנס  מקצוע/תחום', '');
        return;     
       }
      if (!this.selectedGrade.testDate) {
        this.selectedGrade.testDate = this.sd.convertDateToStringDD_MM_YYYY(new Date());
      } else {
        this.selectedGrade.testDate = this.sd.convertDateToStringDD_MM_YYYY(this.selectedGrade.testDate);
      }
      this.selectedGrade['Dcode'] = this.selectedGrade['Dcode'].code;
      this.selectedGrade['Pid'] = this.Pid;
     this.db.addTestGrade(this.selectedGrade, 'single');
console.log(this.pat);
     if (this.pat.haveDificult === 'yes') {
      // have to leave massage for therapists
    
      const massage = {
        date: this.selectedGrade.testDate, 
        Pid: this.Pid,
        patName: this.pat.firstName + ' ' + this.pat.lastName,
        area: this.selectedGrade['Dcode'],
        grade: this.selectedGrade.grade ,
        comment: this.selectedGrade.comment ? this.selectedGrade.comment : '',
        insertBy: this.db.userNow.mail,
        insertTime: new Date()
      };
      console.log(massage);
this.db.addGradeMassageForTherapists(massage);
    }
    } else {
     // update
    }
      

  
    this.selectedGrade = null;
    this.displayDialog = false;
    if (option === 'clean') {
      this.cleanAddForm();
    } else if (option === 'close') {
      dialog.hide();
    }
  }

  
  onRowSelect(event) {
    //console.log(event);
    this.newGrade = false;
    this.selectedGrade = event;
    this.displayDialog = true;
  }
  cleanAddForm() {
this.selectedGrade = {
      testDate: new Date(),
      grade: 0,
      Dcode: '',
      comment: ''
    };
  }
 async search(event) {
   //console.log(event);
   this.mainDiffi = await this.db.limudyAreas.filter(item => item.code.toLowerCase().includes(event.query.toLowerCase()));
    }
  
  onGradeChange(event, dt) {
    this.textForGradeFilter = 'ציונים מעל: ' + event.value;
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'grade', 'gt');
    }, 250);
  }



  ngOnDestroy() {
    //console.log('on destroy');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
