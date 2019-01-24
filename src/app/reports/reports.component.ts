import { Component, OnInit } from '@angular/core';
import { DbService, Therapist } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  startWith = [
    { value: 'area', label: 'תלמידים לפי תחום' },
    { value: 'therapist', label: 'דוח שיעורי מטפל' },
   // { value: 'patient', label: 'דוח לפי תלמיד' },
   // { value: 'classGrades', label: 'דוח  ציונים בכתה' },
    { value: 'class', label: 'קשיי תלמיד לפי כתה' }];

  selectedStartWith;


  // for class and area
  classes = [];
  getAllClasses = false;
  selectedClasses = [];
  areas = [];
  getAllAreas = false;
  selectedAreas = [];
  withDiffiDetails = false;
  withPatDetails = false;
  byMachzor = true;

  // for therapist
  Tid;
  allTherapistList;
  getAllTherapist = false;
  groupsForTherapist;
  patForTherapist;
selectedGroup;
selectedPat;
  getAllGroups = false;
  pats = [];
  getAllPats = false;
  groupOrPat = [
    { value: 'group', label: ' לפי קבוצה' },
    { value: 'pat', label: ' לפי תלמיד' }];
  selectedGroupOrPat;
  // for patient
  Pid;

  // for therapist and patient
  fromDate = this.sd.convertDateToStringDD_MM_YYYY(new Date());
  toDate = this.sd.convertDateToStringDD_MM_YYYY(new Date());
  withoutDate = false;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    this.initClasses();
    // therapist
    if (this.db.userNow.isAdmin) {
      this.db.getAllTherapistsRef().valueChanges().subscribe(T => {
        this.allTherapistList = T;
        //console.log(this.allTherapistList);
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
  }
  getGroupsForTherapist() {
    //console.log('get here' + this.getAllTherapist);
    if ( this.getAllTherapist) {
      return;
    }
    if (!this.Tid) {
      this.sd.createAlert('error', 'שגיאה. בדוק את הנתונים ונסה שוב', '');
      return;
    }
    //console.log('get here');

    this.db.isBusy = true;
    this.db.getGroupByTidRef(this.Tid).valueChanges().subscribe(G => {
      this.groupsForTherapist = G;
      //console.log(G);
      this.db.isBusy = false;
    });
  }
  getPatForTherapist() {
    if ( this.getAllTherapist) {
      return;
    }
    if (!this.Tid ) {
      this.sd.createAlert('error', 'שגיאה. בדוק את הנתונים ונסה שוב', '');
      return;
    }
    this.db.isBusy = true;
    this.db.getPatByTidRef(this.Tid).valueChanges().subscribe(P => {
      this.patForTherapist = P;
      //console.log(P);
      this.db.isBusy = false;
    });
  }
  onSelectedGroupOrPat(event) {
    this.selectedGroupOrPat = event.value.value;
    //console.log('this.getAllTherapist' + this.getAllTherapist);
    if (this.selectedGroupOrPat === 'group' && !this.getAllTherapist) {
      this.getGroupsForTherapist();
    } else if (this.selectedGroupOrPat === 'pat' && !this.getAllTherapist) {
      this.getPatForTherapist();
    }
  }
  onChangeByMachzor(event) {
    //console.log(event);
    this.initClasses();
  }

  onSelectedStartWith(event) {
    this.selectedStartWith = event.value.value;
  }


  onSelectedClass(event) {
    //console.log(event);
    this.selectedClasses = event.value;
    
  }
  onSelectedArea(event) {
    //console.log(event);
    this.areas = event.value;

  }

  initClasses() {
    this.classes = [];
    this.selectedClasses = [];
    if (this.byMachzor) {
      for (let i = 1; i <= this.sd.classes.length; i++) {
        this.classes.push({ label: this.sd.classes[i - 1], value: i });
      }
    } else {
      for (let i = 1; i <= this.sd.classes.length; i++) {
        this.classes.push({ label: this.sd.classes[i - 1] + '-1', value: this.sd.classes[i - 1] + '-1' });
        this.classes.push({ label: this.sd.classes[i - 1] + '-2', value: this.sd.classes[i - 1] + '-2' });

      }
    }
  }


  createReportForClassOrArea() {
   // //console.log(classes);
   // //console.log(areas);
   // check validation
    if (this.selectedClasses.length < 1 && !this.getAllClasses) {
      this.sd.createAlert('error', 'לא נבחרו כיתות לדוח', '');
      return;
    }

   if (this.areas.length < 1 && !this.getAllAreas) {
     this.sd.createAlert('error', 'לא נבחרו תחומים לדוח', '');
     return;
      }

    // check if classes is by classes or machzor
    this.db.isBusy = true;
    this.sd.classesForReport = [];
    if (this.byMachzor) {
      for (const cl of this.selectedClasses) {
        this.sd.classesForReport.push('' + cl.label + '-1');
        this.sd.classesForReport.push('' + cl.label + '-2');

      }
    } else {
      for (const cl of this.selectedClasses) {
        this.sd.classesForReport.push(cl.label);
      }
    }
    //console.log(this.sd.classesForReport);
    this.sd.allAreaFForReport = this.getAllAreas;
    this.sd.allClassesFForReport = this.getAllClasses;
    this.sd.areasForReport = this.areas;
    this.sd.dateFromForReport = this.fromDate;
    this.sd.dateToForReport = this.toDate;
    this.sd.allDateForReport = this.withoutDate;
   if (this.selectedStartWith === 'class') {
     this.sd.routeTo('reportByClass');
   } else if (this.selectedStartWith === 'area') {
     this.sd.routeTo('reportByArea');
   }
  }

  createReportForTherapist() {
    if (!this.getAllTherapist && !this.Tid) {
      this.sd.createAlert('error', 'לא נבחר מטפל', '');
      return;
    }
    if (this.selectedGroupOrPat === 'group'&& !this.getAllTherapist&& !this.getAllGroups && !this.selectedGroup) {
      this.sd.createAlert('error', 'לא נבחרו קבוצות', '');
      return;
    }
    if (this.selectedGroupOrPat === 'pat' && !this.getAllTherapist&& !this.getAllPats && !this.selectedPat) {
      this.sd.createAlert('error', 'לא נבחרו תלמידים', '');
      return;
    }
    this.sd.groupOrPatForReport = this.selectedGroupOrPat;
    this.sd.allPatientFForReport = this.getAllPats;
    this.sd.allTherapistFForReport = this.getAllTherapist;
    this.sd.allGroupFForReport = this.getAllGroups;
    this.sd.selectedGroupForReport = this.selectedGroup;
    this.sd.selectedPatForReport = this.selectedPat;
    this.sd.selectedTidForRport = this.Tid;
    if (this.getAllGroups && !this.getAllTherapist) {
      this.sd.allGroupsForTherapistForReport = this.groupsForTherapist;
    }
    if (this.getAllPats && !this.getAllTherapist) {
      this.sd.allPatsFotTherapistForReport = this.patForTherapist;
    }
    this.sd.routeTo('reportByTherapist');

  }

  createReportForPatient() {

  }
}
