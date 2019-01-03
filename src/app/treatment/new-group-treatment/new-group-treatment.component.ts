import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { DbService, TreatGroup, Therapist, GroupTreatmentInfo } from '../../services/db.service';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-group-treatment',
  templateUrl: './new-group-treatment.component.html',
  styleUrls: ['./new-group-treatment.component.css']
})
export class NewGroupTreatmentComponent implements OnInit {

  GROUP: TreatGroup;
  groupCode: string; // have check if have in routing
  groupsForTherapist: TreatGroup[];
  patTable: any[] = []; // Pid
  Tid: string;
  allTherapistList: Therapist[];
  patsForGroup: any[] = [];
  newTreat: GroupTreatmentInfo;
  enableNewTreat = false;
  expandedRows = [];
  setAllNochechut_v = false;
  treatToUpdate;
  updateDate = false;
  treatToDelete;



  showLoazy = false;
  // dateKind = 'עברי';
  loazyDate;
  selectedDay;
  selectedMonth;
  selectedYear;
  days = [];
  monthes = [];
  years = [];


  constructor(public sd: ShareDataService, public db: DbService,  private route: ActivatedRoute) { 

  }

    ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    this.groupCode = this.route.snapshot.params['id'];
    console.log(this.groupCode);
    if (this.groupCode) {
     this.getGroupByGroupCode();
    }
    if (this.db.userNow.isAdmin) {
     this.db.getAllTherapistsRef().valueChanges().subscribe(T => {
        this.allTherapistList = T;
       console.log(this.allTherapistList);
     });
    } else {
      this.db.isBusy = true;
      this.Tid = this.db.userNow.id;
      this.db.getAllTherapistsRef().doc<Therapist>('' + this.Tid).valueChanges().subscribe(T => {
        this.allTherapistList = [];
        this.allTherapistList.push(T);
        this.db.isBusy = false;
      });
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
    this.clearNewTreat();

  }

  getGroupsForTherapist() {
    if (!this.Tid) {
      this.sd.createAlert('error', 'שגיאה. בדוק את הנתונים ונסה שוב', '');
      return;
    }
    this.db.isBusy = true;
    this.db.getGroupByTidRef(this.Tid).valueChanges().subscribe(G => {
      this.groupsForTherapist = G;
      this.db.isBusy = false;
    });
  }

  getGroupPats() {
    if (!this.groupCode) {
      this.sd.createAlert('error', 'שגיאה. בדוק את הנתונים ונסה שוב', '');
      return;
    }
    this.db.getTeamPatByGroupCode(this.groupCode).valueChanges().subscribe(P => {
      this.patsForGroup = P;
      for (const pat of this.patsForGroup) {
         const temp =  this.db.allPatientList.find(P1 => P1.id === pat.Pid);
          pat['name'] = temp.firstName + ' ' + temp.lastName;
        }
      this.clearNewTreat();
    });
  }


  addTreatLine() {
    console.log(this.sd.dictionary);
    const line: { [k: string]: any} = {};
    for (const key of Object.keys(this.newTreat)) {
      if (key !== 'comment' && !this.newTreat[key]) {
        console.log(key);
        console.log(this.sd.dictionary[key]);
        // it is underfind
        const keyInHebrew = this.sd.dictionary[key];
        this.sd.createAlert('error', ' חסרים פרטים הכרחיים: ' + keyInHebrew + ' . מלא את הדרוש ונסה שוב.', '');
       // return;
      }
      line[key] = this.newTreat[key];
    }
    
    line['index'] = this.patTable.length;
    
    this.patTable.push(line);
    console.log(this.patTable);
  }





  clearNewTreat() {
    console.log(this.GROUP);
    this.newTreat = {
      groupCode: this.groupCode,
      Tid: this.Tid,
      date: null,
      subject: this.GROUP.area,
      method: null,
      startTime: this.GROUP.startTime,
      endTime: this.GROUP.endTime,
      hours: this.GROUP.hours,
      comment: null
    };
    for (const pat of this.patsForGroup) {
      const obj = {
        wasInLesson: false,
        progress: null,
        comment: ''
      };
      this.newTreat[pat.Pid] = obj;
    this.loazyDate = null;
    this.selectedDay = null;
    this.selectedMonth = null;
    this.selectedYear = null;
    this.setAllNochechut_v = false;
  }
  }

  exportData() {

  }


  addNewTreat(modal) {
    this.clearNewTreat();
    this.enableNewTreat = true;
    modal.show();
  }

  saveNewTreat(option, modal) {
  
    console.log('savenew');

    // date
    if (!this.showLoazy) {
      if (!(this.selectedDay && this.selectedMonth && this.selectedYear)) {
        this.sd.createAlert('error', 'שגיאה בתאריך טיפול - בדוק פרטים ונסה שנית', '');
      } else {
        this.db.isBusy = true;
        console.log('hebrewdate');

          this.sd.convertHebrewToNormalDate(this.selectedDay, this.selectedMonth - 1, this.selectedYear - 1).then(result => {
          console.log(result);
          result.subscribe(date => {
            const Lday = (date as any).gd;
            const Lmonth = (date as any).gm;
            const Lyear = (date as any).gy;
            this.newTreat['date'] = '' + Lday + '.' + Lmonth + '.' + Lyear;
            console.log(this.loazyDate);
            if (this.checkTraetInfo(this.newTreat)) {
              this.saveAfterCheck(option, modal);
            } else {
              this.db.isBusy = false;
              return;
            }
          });
      });
    }
    } else if (this.showLoazy) {
      if (!this.loazyDate) {
        this.sd.createAlert('error', 'שגיאה בתאריך טיפול - בדוק פרטים ונסה שנית', '');
      } else {
        this.db.isBusy = true;
        this.newTreat['date'] = this.sd.convertDateToStringDD_MM_YYYY(this.loazyDate);
       if(this.checkTraetInfo(this.newTreat)) {
              this.saveAfterCheck(option, modal);
            } else {
              this.db.isBusy = false;
              return;
            }
      }
    }
    
  }



  saveAfterCheck(option, modal) {
    console.log(this.newTreat);
  this.addTreatLine();


this.newTreat['insertBy'] = this.db.userNow.mail;
this.newTreat['insertTime'] = '' + new Date();

    if (option === 'close') {
      this.enableNewTreat = false;
      modal.hide();
    }
    this.db.addGroupTreatmentInfo(this.newTreat);
    for (const key of Object.keys(this.newTreat)) {
      // check if is a pat have progress
      if(this.newTreat[key]['progress'] && this.newTreat[key]['progress'] > 0) {
        if(this.sd.useML) {
          const data = {
            progress: this.newTreat[key]['progress'], 
            Pid: key, 
            birth_year: this.patsForGroup.find(P => P.id === key).birthDate, 
            diffi: this.newTreat.subject, 
            method: this.monthes, 
            insertBy:  this.db.userNow.mail, 
            insertTime: new Date()
          }
          this.db.addTreatForML(data);
      }
    }
  }
// update remain aproved hours for group
this.GROUP.aprovedHours = this.GROUP.aprovedHours - +this.newTreat.hours;
this.db.updateGroup(this.GROUP);
      this.clearNewTreat();
      this.db.isBusy = false;
      
    }


    onRowExpand() {
    }

    setAllNochecut(option) {
      if (option === 'new') {
       for (const pat of this.patsForGroup) {
          this.newTreat[pat.Pid].wasInLesson = this.setAllNochechut_v;
        } 
      } else if(option === 'update') {
        for (const pat of this.patsForGroup) {
          this.treatToUpdate[pat.Pid].wasInLesson = this.setAllNochechut_v;
        }
      }

    }



    getAllGroupLessons() {
      this.db.isBusy = true;
      this.db.getGroupTreatmentInfoRefByGroupCode(this.groupCode).valueChanges().subscribe(info => {
      this.patTable = info;
      this.db.isBusy = false;
      });
    }

    getLastMonth() {
      console.log('01/02/03'.localeCompare('03/02/03'));
       console.log('03/02/03'.localeCompare('01/02/03'));

      const date = new Date();
     const month = '' + (date.getMonth() + 1);
     const year = '' + date.getFullYear();
      this.db.isBusy = true;
      this.db.getGroupTreatmentInfoRefByGroupCode(this.groupCode).valueChanges().subscribe(info => {
        this.patTable = info.filter(treat => this.checkIfIsOneMonth(month, year, treat.date));
       for (const pat of this.patTable) {
         console.log(pat.date);
       }
      this.db.isBusy = false;
      });
    }

    updateTreat(modal) {
      if (this.updateDate) {
         if (!this.showLoazy) {
      if (!(this.selectedDay && this.selectedMonth && this.selectedYear)) {
        this.sd.createAlert('error', 'שגיאה בתאריך טיפול - בדוק פרטים ונסה שנית', '');
      } else {
        this.db.isBusy = true;
        console.log('hebrewdate');

          this.sd.convertHebrewToNormalDate(this.selectedDay, this.selectedMonth - 1, this.selectedYear - 1).then(result => {
          console.log(result);
          result.subscribe(date => {
            const Lday = (date as any).gd;
            const Lmonth = (date as any).gm;
            const Lyear = (date as any).gy;
            this.treatToUpdate['date'] = '' + Lday + '.' + Lmonth + '.' + Lyear;
            console.log(this.loazyDate);
            if(this.checkTraetInfo(this.treatToUpdate)) {
              this.db.updateGroupTreatmentInfo(this.treatToUpdate);
              this.db.isBusy = false;
              modal.hide();

            } else {
              this.db.isBusy = false;
              return;
            }
       

          });
      });
    }
    } else if (this.showLoazy) {
      if (!this.loazyDate) {
        this.sd.createAlert('error', 'שגיאה בתאריך טיפול - בדוק פרטים ונסה שנית', '');
      } else {
        this.db.isBusy = true;
        this.treatToUpdate['date'] = this.sd.convertDateToStringDD_MM_YYYY(this.loazyDate);
        if(this.checkTraetInfo(this.treatToUpdate)) {
              this.db.updateGroupTreatmentInfo(this.treatToUpdate);
              this.db.isBusy = false;
              modal.hide();

            } else {
              this.db.isBusy = false;
              return;
            }

      }
    }
      } else {
        if(this.checkTraetInfo(this.treatToUpdate)) {
              this.db.updateGroupTreatmentInfo(this.treatToUpdate);
              this.db.isBusy = false;
              modal.hide();
            } else {
              this.db.isBusy = false;
              return;
            }
      }
    }


    deleteTreat() {
      try {
        console.log(this.treatToDelete);
 this.db.deleteGroupTreatmentInfo(this.treatToDelete);
      } catch(err) {
        this.sd.createAlert('error', 'ארעה שגיאה- נסה שוב', '')
      }
     
    }

    checkIfIsOneMonth(month, year, dateToCheck) {
      console.log(month);
      console.log(year);
      console.log(dateToCheck);

      try {
const temp = dateToCheck.split('.');
if (temp[1] === month && temp[2] === year) {
  return true;
}
return false;
      } catch(err) {
        this.sd.createAlert('error', 'שגיאה בהמרת נתונים', '');
        return false;
      }
      
    }


    getGroupByGroupCode() {
      console.log('getgroupcode');
      console.log(this.groupCode);
      this.db.isBusy = true;
      this.db.getGroupByGroupCodeRef(this.groupCode).valueChanges().subscribe(groups => {
        console.log(groups);
        this.Tid = groups[0].Tid;
        this.groupsForTherapist = groups;
        this.GROUP = groups[0];
        this.getGroupPats();
        this.db.isBusy = false;
      });
    }


    checkTraetInfo(treat) {
      if(!this.sd.timeRegex.test(treat.startTime)){
         this.sd.createAlert('error', 'שעת התחלה לא תקנית', '');
         return false;
      }
      if(!this.sd.timeRegex.test(treat.endTime)){
         this.sd.createAlert('error', 'שעת סיום לא תקנית', '');
         return false;
      }
      for (const key of Object.keys(treat)) {
        if (!treat[key]) {
          if (key === 'comment') {
            continue;
          }
          this.sd.createAlert('error', 'חסרים פרטים:' + this.sd.dictionary[key], '');
          return false;
        }
      }
      return true;
    }
}

