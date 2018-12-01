import { Component, OnInit } from '@angular/core';
import { TreatGroup, DbService, PatientsDifficult, AreaForTherapist } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

  newDate; //  = new Date();

  GROUP: TreatGroup; /* = {
    Tid: null,
    grade1: null,
    grade2: null,
    area: null,
    startDate: this.sd.convertDateToStringDD_MM_YYYY(this.newDate),
    aprovedHours: 0,
    groupName: this.sd.convertDateToStringDD_MM_YYYY(this.newDate),  // entered by user
    groupCode: this.newDate
  };*/

  newTFA = {
    id:  {id: '' },
    code: {code: ''}
  };

/*
interface TreatGroup {
Tid: string;
grade1: string;
grade2: string;
area: string;
startDate: string;
aprovedHours: number;
groupName: string; // entered by user
groupCode: Date; // timestemp
  }*/
  startWith = [
    {value: 'area', label: 'התחל לפי תחום'},
    { value: 'therapist', label: 'התחל לפי מטפל' }];

  selectedStartWith; // could be area or therapist
  classes = [];
  patsTable: any[];
  selectedPatForGroup = [];
  areas;
  therapists;
  showClasses = false;
  showAreaForTherapist = false;
  showTherapistForArea = false;

// for search
  thForSearch;
  mainDiffi;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
this.init();
  }

onRowSelect(event) {
 // console.log(event);
 // console.log(this.selectedPatForGroup);
}
  onSelectedStartWith(event) {
    this.patsTable = null;
  //  console.log(event);
    this.selectedStartWith = event.value.value;
    this.showAreaForTherapist = false;
    this.showTherapistForArea = false;
    this.showClasses = false;
    /*if (this.selectedStartWith === 'area') {
      this.therapists = this.db.allTherapistList;
    } else if (this.selectedStartWith === 'theraist') {
      this.areas = this.db.limudyAreas;
    }*/
  }

  async onSelectedClass(event) {

    this.GROUP.grade1 = event.value + '-1';
    this.GROUP.grade2 = event.value + '-2';
  this.db.isBusy = true;
    this.patsTable = await this.getAllstudesHaveDiffucult(this.GROUP.area, [this.GROUP.grade1, this.GROUP.grade2]);
    this.db.isBusy = false;
  }
  getAreasForTherapist() {
    this.db.isBusy = true;
    this.db.getAreasByTherapistIDRef(this.GROUP.Tid).valueChanges().subscribe(area => {
      this.areas = area;
      this.showAreaForTherapist = true;
      this.GROUP.area = null;
      this.db.isBusy = false;
    });

  }


  getTherapistForArea() {
    this.db.isBusy = true;
    this.db.getTherapistByAreaCodeRef(this.GROUP.area).valueChanges().subscribe(thera => {
      this.therapists = thera;
      this.showTherapistForArea = true;
      this.GROUP.Tid = null;
      this.db.isBusy = false;
    });
  }

// copy to functions
  async getAllstudesHaveDiffucult(area, grades: string[]) {
   // console.log('in get pat');
   
    const patTable: any[] = [];
    const db = firebase.firestore();
    const patForDiffi = await db.collection('patientDifficults').where('Dcode', '==', area ).get();
    // console.log(patForDiffi.docs);
    let allClassesPats = [];
    for (const grade of grades) {
     // console.log(grade);

      const class1 = await db.collection('patients').where('haveDificult', '==', 'yes').where('grade', '==', grade).get();
     // console.log(class1);

      allClassesPats = allClassesPats.concat(class1.docs);
     // console.log(allClassesPats);

    }
    
    
    for (const patC of allClassesPats) {
     // console.log(patC.data());

      const patDi = await patForDiffi.docs.find(patD => ((patD as any).data().Pid === (patC as any).data().id));
      if (patDi) {
        const ob = {
          Pid: patC.data().id,
          firstName: patC.data().firstName,
          lastName: patC.data().lastName,
          grade: patC.data().grade,
          mipuyDate: (patDi as any).data().mipuyDate,
          degreeOfDiffi: (patDi as any).data().degreeOfDiffi ? (patDi as any).data().degreeOfDiffi : 'לא הוכנס',
          comment: '',
          addToGroup: true
        };
        patTable.push(ob);
      //  console.log(patTable);

      }
    }

    return patTable;
  
  }

addAreaForTherapist() {

this.newTFA.id.id = this.GROUP.Tid;
this.newTFA.code = null;
}


addTherapistForArea() {
  this.newTFA.code.code = this.GROUP.area;
  this.newTFA.id = null;
}


  async searchTh(event) {
    this.thForSearch = await this.db.allTherapistList.filter(item => 
      (item.firstName + ' ' + item.lastName).toLowerCase().includes(event.query.toLowerCase()));
  }

  async searchAr(event) {
    this.mainDiffi = await this.db.treatmentCategories.filter(item => item.code.toLowerCase().includes(event.query.toLowerCase()));
  }
  async saveNewGroup(option) {
    this.db.isBusy = true;
    console.log(this.selectedPatForGroup);
    // check if have all needed props
    for (const key of Object.keys(this.GROUP)) {
      if (!this.GROUP[key]) {
          this.sd.createAlert('error', 'שדה ' + this.sd.dictionary[key] + ' לא תקין', '');
          this.db.isBusy = false;
          return;
      }
    }
try {
    const user = this.db.userNow.mail;
    const time = new Date();
    // add group datails
    this.GROUP.insertBy = user;
    this.GROUP.insertTime = time;
  console.log('GET HERE 1');

    await this.db.addNewGroup(this.GROUP);
  console.log('GET HERE 2');

    // add patients in group
    for (const pat of this.selectedPatForGroup) {
      const ob = {
        Pid: pat.Pid,
        groupCode: '' + this.GROUP.groupCode,
        status: 'in',
        startDate: this.GROUP.startDate,
        insertBy: user,
        insertTime: time
      };
     await this.db.addPatToGroup(ob);
      console.log('GET HERE 3');

    }
    this.db.isBusy = false;
    this.sd.createAlert('success', 'קבוצה נוספה בהצלחה', '');
    if (option === 'stay') {
        this.init();
    } else if (option === 'leave') {
      this.sd.routeTo('teams');
    }

  } catch (err) {
  this.db.isBusy = false;
  console.error(err);
      this.sd.createAlert('error', 'ארעה שגיאה- בדוק את הנתונים ונסה שוב', '');
   }
  }



  saveNewTFA(option, dialog) {
    if ((!this.newTFA.id.id) || (!this.newTFA.code.code)) {
     this.sd.createAlert('error', 'חסרים פרטים הכרחיים', '');
     return;
    }
    const newTFA: AreaForTherapist = {
      id: this.newTFA.id.id,
      code: this.newTFA.code.code,
      insertBy: this.db.userNow.mail,
      insertTime: new Date()
    };
    console.log(newTFA);
    this.db.addTherapistForArea(newTFA);
    this.newTFA.id.id = '';
    this.newTFA.code.code = '';
    
     if (option === 'close') {
      dialog.hide();
    }
  }

  init() {
    this.newDate = new Date();
    this.GROUP = {
      Tid: null,
      grade1: null,
      grade2: null,
      area: null,
      startDate: this.sd.convertDateToStringDD_MM_YYYY(this.newDate),
      aprovedHours: 0,
      groupName: this.sd.convertDateToStringDD_MM_YYYY(this.newDate),  // entered by user
      groupCode: '' + this.newDate
    };
    this.showAreaForTherapist = false;
    this.showClasses = false;
    this.showTherapistForArea = false;
    this.patsTable = null;
    this.selectedPatForGroup = [];
    this.selectedStartWith = null;
  }

}
