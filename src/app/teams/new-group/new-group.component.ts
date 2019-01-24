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

  GROUP: TreatGroup; 

  newTFA = {
    id:  null,
    code: null
  };


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
 // //console.log(event);
 // //console.log(this.selectedPatForGroup);
}
  onSelectedStartWith(event) {
    this.patsTable = null;
  //  //console.log(event);
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
    //console.log('get area' + this.GROUP.Tid);
    this.db.isBusy = true;
    this.db.getAreasByTherapistIDRef(this.GROUP.Tid).valueChanges().subscribe(area => {
      //console.log(area);
      this.areas = area;
      this.showAreaForTherapist = true;
      this.GROUP.area = null;
      this.db.isBusy = false;
    });

  }


  getTherapistForArea() {
    this.db.isBusy = true;
    this.db.getTherapistByAreaCodeRef(this.GROUP.area).valueChanges().subscribe(thera => {
      this.therapists = this.db.allTherapistList.filter(T => thera.findIndex(th => T.id === th.id) > -1);
      this.showTherapistForArea = true;
      this.GROUP.Tid = null;
      this.db.isBusy = false;
    });
  }

// copy to functions
  async getAllstudesHaveDiffucult(area, grades: string[]) {
   
    const patTable: any[] = [];
    const db = firebase.firestore();
    const patForDiffi = await db.collection('patientDifficults').where('Dcode', '==', area ).get();
    let allClassesPats = [];
    for (const grade of grades) {

      const class1 = await this.db.allPatientList.filter(P => P.grade === grade && 
                                                            patForDiffi.docs.findIndex(P_D => P_D.data().Pid === P.id) > -1);
      allClassesPats = allClassesPats.concat(class1);

    }
    
    
    for (const patC of allClassesPats) {
      const patDi = patForDiffi.docs.find(P => P.data().Pid === patC.id);
     
        const ob = {
          Pid: patC.id,
          firstName: patC.firstName,
          lastName: patC.lastName,
          grade: patC.grade,
          mipuyDate: (patDi as any).data().mipuyDate,
          degreeOfDiffi: (patDi as any).data().degreeOfDiffi ? (patDi as any).data().degreeOfDiffi : 'לא הוכנס',
          comment: '',
          addToGroup: true
        };
        patTable.push(ob);
       //console.log(patTable);

      
    }

    return patTable;
  
  }

addAreaForTherapist() {

this.newTFA.id = this.GROUP.Tid;
this.newTFA.code = null;
}


addTherapistForArea() {
  this.newTFA.code = this.GROUP.area;
  this.newTFA.id = null;
}


  async searchTh(event) {
    //console.log(event);
    //console.log(this.thForSearch);
    this.thForSearch = await this.db.allTherapistList.filter(item => 
      (item.firstName + ' ' + item.lastName).toLowerCase().includes(event.query.toLowerCase()));
  }

  async searchAr(event) {
    //console.log(event);

    this.mainDiffi = await this.db.secondCategories.filter(item => item.code.toLowerCase().includes(event.query.toLowerCase()));
  }
  async saveNewGroup(option) {
    this.db.isBusy = true;
    //console.log(this.selectedPatForGroup);
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

    await this.db.addNewGroup(this.GROUP);

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
      //console.log('GET HERE 3');
      this.db.addAprovedGroupPatForTherapist(pat.Pid, this.GROUP.groupCode, this.GROUP.Tid);
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
  //console.error(err);
      this.sd.createAlert('error', 'ארעה שגיאה- בדוק את הנתונים ונסה שוב', '');
   }
  }



  saveNewTFA(option, dialog) {
    //console.log(this.newTFA);
    if ((!this.newTFA.id) || (!this.newTFA.code)) {
     this.sd.createAlert('error', 'חסרים פרטים הכרחיים', '');
     return;
    }
    const newTFA: AreaForTherapist = {
      id: this.newTFA.id,
      code: this.newTFA.code,
      insertBy: this.db.userNow.mail,
      insertTime: new Date()
    };
    //console.log(newTFA);
    this.db.addTherapistForArea(newTFA);
    this.newTFA.id = null;
    this.newTFA.code = null;
    
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
      groupCode: '' + this.newDate,
      startTime: '00:00',
      endTime: '00:00', 
      hours: '0'
    };
    this.showAreaForTherapist = false;
    this.showClasses = false;
    this.showTherapistForArea = false;
    this.patsTable = null;
    this.selectedPatForGroup = [];
    this.selectedStartWith = null;
  }

}
