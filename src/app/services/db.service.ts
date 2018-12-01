import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { ShareDataService } from './share-data.service';

export interface User {
  isAdmin: boolean;
  userName?: string;
  password: string;
  mail: string;
  name: string;
  id?: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface Therapist {
  id: string;
  firstName: string;
  lastName: string;
  phone1: string;
  phone2?: string;
  address: string;
 // priceForLesson: number;
  mail: string;
  strFreeTime: string;
  skill: string;
  experienceYears: number;
  experienceBefore: string;
  kind: string;
  dergee: string;
  comment: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  fathersName: string;
  fathersPhone: string;
  mothersPhone: string;
  kupatCholim: string;
  birthDate: string;
  grade: string;
  comment: string;
  strFreeTime: string;
  haveDificult: string;
  address?: string;
  morePhone?: string;
  mothersName?: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface TreatGroup {
Tid: string;
grade1: string;
grade2: string;
area: string;
startDate: string;
aprovedHours: number;
groupName: string; // entered by user
groupCode: string; // timestemp
  [k: string]: any;
  /* all patients in group are key in object like this: Pid: 'patient' and  
  Pid_STATUS:
  1) 'leave_FROM_date_TILL_date_R_reason' - L_F_(date)_T_(date)_R_(reason)
  2) 'freeze_FROM_date_TILL_date_R_reason' - F_F_(date)_T_(date)_R_(reason)
  3) 'currect_FROM_date - C_F_(date)*/
  insertBy?: string;
  insertTime?: Date;
}

export interface PatientInGroup {
  Pid: string;
  groupCode: string;
  status: string;
  startDate: string;
  outDate?: string;
  reason?: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface PatientFile {
  Pid: string;
  fileName: string;
  date: Date;
  insertBy?: string;
  insertTime?: Date;
}
export interface PatientComment {
  Pid: string;
  commentDate: Date;
  commentInfo: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface Difficulty {
  code: string;
  description: string;
  Dfather: string;
  isLeave: boolean;
  index: string;
  allFathers: string;
  insertBy?: string;
  insertTime?: Date;
}

export interface Method {
  code: string;
  description: string;
  insertBy?: string;
  insertTime?: Date;
}
export interface Mipuy {
  Pid: string;
  mipuyDate: string;
  planForPatient: string;
  insertBy?: string;
  insertTime?: Date;
}
 export interface PatientsDifficult {
   Pid: string;
   Dcode: string;
   mipuyDate: string;
   status: string; // yes or maybe or not-relevant
   insertBy?: string;
   insertTime?: Date;
 }
 export interface TherapistMethods {
   Tid: string;
   Mcode: string;
  // priceForLesson: number;
   insertBy?: string;
   insertTime?: Date;
 }
 export interface MethodForDifficulty {
   Mcode: string;
   Dcode: string;
   insertBy?: string;
   insertTime?: Date;
 }
 export interface PlanForPatient {
   Pid: string;
   history: string;
   parentsApproved: string;
   approvedAmountLesson: number;
   hoursLeft: number;
   payer: string;
   haveDueDate: boolean;
   dueDate?: Date;
   insertBy?: string;
   insertTime?: Date;
   // progressionNumber: number;
   mipuy_id_in_db: string;
   date: string;
   [k: string]: any; // key loos like DIFNAME_THERPIST or DIFNAME_METHOD or DIFNAME and than the value
 }
 
 /*export interface TreatmentProgression {
  Pid: string;
  // Tid: string;
  progressCode: string; // timestemp
  diffiCode: string;
  methodCode: string;
  approvedAmountLesson: number;
  paysBy: string;
   insertBy?: string;
   insertTime?: Date;
 }*/
 export interface TestGrade {
date: string;
Dcode: string;
Tid: string;
className: string;
testCode: string; // Dcode_GFP_date_GFP_className
comment?: string;
   insertBy?: string;
   insertTime?: Date;

 }
 export interface AreaForTherapist {
   code: string; // Dcode
   id: string; // Tid
   insertBy?: string;
   insertTime?: Date;
 }

export interface TreatmentInfo {
   Pid: string;
   Tid: string;
   progressionCode: string; // plan doc id
   area: string;
   treatmentNumber: string; // timestemp
   treatDate: Date;
   startTime: string;
   endTime: string;
   hours: string;
   description: string;
   comment: string;
   progress?: number; // between 0 to 4
  insertBy?: string;
  insertTime?: Date;
 }

 export interface GroupTreatmentInfo {
   groupCode: string;
   Tid: string;
   date: string;
   startTime: string;
   endTime: string;
   hours: string;
   subject: string;
   method: string;
   comment: string;
  insertBy?: string;
  insertTime?: string;
    [pat: string]: any;

 }
 export interface PatInGroupLesson {
   wasInLesson: boolean;
   progress: number; // between 0 to 4
   comment: string;
 }
export interface MipuyDecideForPlan {
  Pid: string;
  mipuy_id_in_db: string;
  date?: Date;
  [k: string]: any; // key loos like DIFNAME_THERPIST or DIFNAME_METHOD and than the value
  insertBy?: string;
  insertTime?: Date;
}

export interface MassageForUser {
 userId: string;
 massage: string;
 year: number;
 month: number;
  dateInMonth: number;
 hour: number;
kind?: string;
comments: string;
  insertBy?: string;
  insertTime?: Date;
}

export interface GradeMassageForTherapist {
Tmail?: string;
Tname?: string;
date: string;
Pid: string;
patName: string;
area: string;
grade: string;
comment: string;
insertBy?: string;
insertTime?: string;
}
export interface AprovedPlanForTherpist {
  Tid: string;
  PlanDocId: string;
  Pid: string;
  insertBy?: string;
  insertTime?: Date;
}

export interface GradeForPatient {
Dcode?: string;
Pid: string;
grade: string;
comment?: string;
testDate?: string;
insertBy?: string;
insertTime?: Date;
testCode: string; // Dcode_GFP_testDate_GFP_class
}


@Injectable()
export class DbService {
// ref
public allUsersRef: AngularFirestoreCollection<User>;
public difficultRef: AngularFirestoreCollection<Difficulty>;
public methodsRef: AngularFirestoreCollection<Method>;
public allPatientsRef: AngularFirestoreCollection<Patient>;
public allTherapistsRef: AngularFirestoreCollection<Therapist>;
public allDifficultsRef: AngularFirestoreCollection<Difficulty>;
public allPatientsCommentRef: AngularFirestoreCollection<PatientComment>;
public allMethodsRef: AngularFirestoreCollection<Method>;
public difficultForPatientRef: AngularFirestoreCollection<PatientsDifficult>;
public methodForTherapistRef: AngularFirestoreCollection<TherapistMethods>;
public methodForDifficultyRef: AngularFirestoreCollection<MethodForDifficulty>;
public planForPatientRef: AngularFirestoreCollection<PlanForPatient>;
public treatmentInfoForProgressRef: AngularFirestoreCollection<TreatmentInfo>;
  public mipuyForPatientRef: AngularFirestoreCollection<Mipuy>;
  public patientsFileRef: AngularFirestoreCollection<PatientFile>;
  treatmentCategoriesRef: AngularFirestoreCollection<Difficulty>;
  methodAndTherapistForPatientPlanDiffRef: AngularFirestoreCollection<MipuyDecideForPlan>;
// list
public userNameList: string[] = [];
public therapistIDList: string[] = [];
public patientIDList: string[] = [];
public allDifficultsList: Difficulty[] = [];
public allMethodsList: Method[] = [];
public allPatientList: Patient[] = [];
public allTherapistList: Therapist[] = [];
public mipuyForPatientList: Mipuy[] = [];
public treatmentCategories: Difficulty[] = [];
public isBusy = false;
public userNow: User;
public isLoginV = false;
public newMipuy: string[] = [];
public limudyAreas: Difficulty[] = [];

// for patient list filter
public filteredPatientList = [];
  fname = '';
  lname = '';
  grade = '';
  findByCategory;

// end for patient list filter

  constructor(public afs: AngularFirestore , private sd: ShareDataService) {
    // get all users
    this.allUsersRef = this.afs.collection('users');
    this.allUsersRef.valueChanges().subscribe(users => {
      users.forEach(user => {
        this.userNameList.push(user.id);
      });
    });

    this.getDataByLogin();
   }

   getDataByLogin() {
     this.userNow = {
       id: '312547870',
       mail: 'sm5800810',
       isAdmin: true,
       name: 'sara',
       userName: 'saraer',
       password: '1234'
     };
     // get main diffis areas
     this.treatmentCategoriesRef = this.afs.collection('difficults', ref => {
       return ref.where('Dfather', '==', 'null');
     });
     this.treatmentCategoriesRef.valueChanges().subscribe(areas => {
       this.treatmentCategories = areas;
     });
     // get all patients id
     this.allPatientsRef = this.afs.collection('patients');
     this.allPatientsRef.valueChanges().subscribe(pats => {
       this.allPatientList = pats;
       this.allPatientList.sort((a, b) => {
         return a.grade.localeCompare(b.grade) || a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName);
       });
        this.filteredPatientList = this.allPatientList;
       pats.forEach(pat => {
         this.patientIDList.push(pat.id);

       });
     });
     // get all therapist id
     this.allTherapistsRef = this.afs.collection('therapist');
     this.allTherapistsRef.valueChanges().subscribe(theras => {
       theras.forEach(th => {
         this.therapistIDList.push(th.id);
         this.allTherapistList.push(th);
       });
     });

     // get all methods
     this.allMethodsRef = this.afs.collection('methods');

     // get all difficults ref
     this.allDifficultsRef = this.afs.collection('difficults');
    //  this.allDifficultsRef.valueChanges().subscribe(diffs => {
    //    this.allDifficultsList = diffs;
    //  });

    // get limudiAreasForGrades
     this.afs.collection<Difficulty>('difficults', ref => {
       return ref.where('Dfather', '==' , 'לימודי');
     }).valueChanges().subscribe(D => {
       this.limudyAreas = D;
     });


      this.allPatientsCommentRef = this.afs.collection('patientsComments');
      this.difficultForPatientRef = this.afs.collection('patientDifficults');
      this.mipuyForPatientRef = this.afs.collection('mipuy');
     this.treatmentInfoForProgressRef = this.afs.collection('treatmentInfo');
     this.patientsFileRef = this.afs.collection('patientFile');
     this.methodForTherapistRef = this.afs.collection('methodForThertapist');
     this.methodForDifficultyRef = this.afs.collection('methodForDifficult');
   }

   isLogin() {
	  // return true;
     return this.isLoginV;
   }

  /**
   * isTherapistExist
   */
  public isTherapistExist(Tid) {
    return this.therapistIDList.indexOf(Tid) > -1;
  }
  /**
   * isPatientExist
   */
  public isPatientExist(Pid) {
    return this.patientIDList.indexOf(Pid) > -1;
  }




  /**************************************************** */
  /*****************       add to db           ******* */

  /**
   * addTherapist
   */
  public addTherapist(thera: Therapist) {
    thera.insertBy = this.userNow.mail;
    thera.insertTime = new Date();
    this.allTherapistsRef.doc('' + thera.id).set(thera).then(res => {
      return res;
    });
    this.sd.createAlert('success', 'מטפל בשם' + thera.firstName + thera.lastName + 'נוסף בהצלחה', '');
  }

  /**
   * addPatient
   */
  public addPatient(pati: Patient) {
    pati.insertBy = this.userNow.mail;
    pati.insertTime = new Date();
   this.allPatientsRef.doc('' + pati.id).set(pati).then(res => {
     this.sd.createAlert('success', 'תלמיד בשם' + pati.firstName + pati.lastName + 'נוסף בהצלחה', '');
return res;
   });
  }

  /**
   * addDifficult
   */
  public addDifficult(diffi: Difficulty) {
    diffi.insertBy = this.userNow.mail;
    diffi.insertTime = new Date();
    this.allDifficultsRef.doc('' + diffi.code + '_' + diffi.Dfather).set(diffi).then(res => {
return res;
    });
  }

/**
 * addComment
 */
public addComment(com: PatientComment) {
  com.insertBy = this.userNow.mail;
  com.insertTime = new Date();
  this.allPatientsCommentRef.add(com).then(res => {
    return res;
  });
}

/**
 * addPatientDifficult
 */
public addPatientDifficult(diffi: PatientsDifficult) {
  diffi.insertBy = this.userNow.mail;
  diffi.insertTime = new Date();
  this.difficultForPatientRef.add(diffi).then(res => {
    return res;
  });
}

/**
 * addTherapistForArea
 */
public addTherapistForArea(TFA: AreaForTherapist) {
  this.afs.collection('areaForTherapist').doc('' + TFA.id + TFA.code).set(TFA).then(res => {
    return res;
  });
}

/**
 * addNewGroup
 */
public addNewGroup(group) {
  console.log('in add g');
  console.log(group);
  this.afs.collection('groups').doc('' + group.groupCode).set(group).then(res => {
    console.log(res);
    return res;
  }).catch(err => {
console.error(err);
return err;
  });
}

/**
 * addPatToGroup
 */
  public addPatToGroup(pat: PatientInGroup) {
    this.afs.collection('patientInGroup').add(pat).then(res => {
      return res;
    });
}
/**
 * addTreatmentInfo
 */
public addTreatmentInfo( treat: TreatmentInfo) {
  treat.insertBy = this.userNow.mail;
  treat.insertTime = new Date();
  this.treatmentInfoForProgressRef.add(treat).then(res => {
    this.sd.createAlert('success', 'שיעור הוסף בהצלחה', '');
    return res;
  });
}

/**
 * addMethod
method: Method */
public addMethod(method: Method) {
  method.insertBy = this.userNow.mail;
  method.insertTime = new Date();
  this.allMethodsRef.add(method).then(res => {
    this.sd.createAlert('success', 'שיטה נוספה בהצלחה', '');
    return res;
  });

}
  /**
     * addMethodForDifficult
     */
  public addMethodForDifficult(methodForDifficult: MethodForDifficulty) {
    methodForDifficult.insertBy = this.userNow.mail;
    methodForDifficult.insertTime = new Date();
    this.methodForDifficultyRef.doc('' + methodForDifficult.Dcode + '_' + methodForDifficult.Mcode).set(methodForDifficult).then(res => {
      return res;
    });
  }
/**
     * addMassageFor
     * user
     */
  addMassageForUser(date: Date, massage: string, kind: string, comment: string){
     const M = {
    userId: this.userNow.id,
    date: date,
    massage: massage,
    kind: kind,
    comments: comment,
    insertBy: this.userNow.mail,
    insertTime: new Date()
  };
  this.afs.collection('users').doc(this.userNow.id).collection('massages').add(M).then((result) => {
    this.sd.createAlert('success', 'תזכורת נוספה בהצלחה', '');
    return result;
  }).catch((err) => {
    this.sd.createAlert('error', 'ארעה שגיאה- נא נסה שוב', '');
    return err;
  });
  }

  public addGroupTreatmentInfo(info: GroupTreatmentInfo){
    this.afs.collection('groupTreatmentInfo').doc('' + info.insertTime).set(info).then(res => {
         this.sd.createAlert('success', 'שיעור נוסף בהצלחה', '');
         this.isBusy = false;
    return res;
  }).catch((err) => {
    this.sd.createAlert('error', 'ארעה שגיאה- נא נסה שוב', '');
             this.isBusy = false;
    return err; 
    });
  }

  /**
     * addMassageFor
     * user
     */
  addMassage(massage: MassageForUser) {
  this.afs.collection('users').doc(this.userNow.id).collection('massages').add(massage).then(res => {
    this.sd.createAlert('success', 'תזכורת הוספה בהצלחה', '');
    return res;
  }).catch(err => {
this.sd.createAlert('error', 'שגיאה- נסה שוב או פנה למנהל המערכת', '');
return err;
  });
  }

  /**
   * addGradeMassageForTherapists
   */
  public addGradeMassageForTherapists(massage) {
    this.afs.collection('gradeMassageForTherapists').add(massage);
  }

//   /**
//      * addMethodAndTherapistForPatientPlan
//      */
//   addMethodAndTherapistForPatientPlan(difInfo, Pid, mipuyDate) {
// this.methodAndTherapistForPatientPlanDiffRef.doc
//   }

  /**
     * addTherapistForMethod
     */
  addTherapistForMethod(theraForMethod: TherapistMethods) {
    theraForMethod.insertBy = this.userNow.mail;
    theraForMethod.insertTime = new Date();
    this.methodForTherapistRef.doc('' + theraForMethod.Tid + '_' + theraForMethod.Mcode).set(theraForMethod).then(res => {
      return res;
    });
  }


  /**
   * addPlanForPatient
   */
  public addPlanForPatient(plan: PlanForPatient, docName: string) {
    plan.insertBy = this.userNow.mail;
    plan.insertTime = new Date();
    this.getPlanForPatientRef(plan.Pid).doc(docName).set(plan).then(res => {
      this.sd.createAlert('success', 'תכנון עודכן בהצלחה', '');
      return res;
    });
    }


    addAprovedPlanForTherapist(Tid, planDoc, Pid) {
    this.afs.collection('therapist').doc(Tid).collection('patient').doc(planDoc).set({
      Tid: Tid, 
      Pid: Pid, 
      planDocId: planDoc}).then(res => {
        return res;
      });

    // const updataList = firebase.functions().httpsCallable('setPatientForTherapist');
    // updataList({ Tid: Tid, Pid: Pid }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   this.sd.createAlert('error', 'ארעה שגיאה במהלך השמירה יתכן וחלק מהנתונים לא נשמרו', '');
    //   console.log(err);
    // });
  }
   
  
  /**
   * addTestGrade
   */
  public  addTestGrade(grade: GradeForPatient, option) {
    this.afs.collection('grades').add(grade).then((result) => {
      if (option === 'single') {
        this.sd.createAlert('success', 'ציון מבחן נוסף בהצלחה', '');
        return;
      } else {
        return result;
      }
    }).catch((err) => {
      if (option === 'single') {
      this.sd.createAlert('error', 'ארעה שגיאה- נסה שוב', '');
      return;
      } else {
        return err;
      }
    });
  }

  /**
   * addTest
   */
  public async addTest(test: TestGrade): Promise<any> {
    this.afs.collection('test').doc(test.testCode).set(test).then(res => {
      return res;
    }).catch(err => {
      return err;
    });
  }

  /**************************************************** */
  /*****************       update to db           ******* */

  /**
   * updateTherapist
   */
  public updateTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).update(th).then(res => {
      return res;
    });
    this.sd.createAlert('success', 'מטפל עודכן בהצלחה', '');
  }


  /**
   * updatePatient
   */
  public updatePatient(pat) {
    this.allPatientsRef.doc('' + pat.id).update(pat).then(res => {
      return res;
    });
     this.sd.createAlert('success', 'תלמיד עודכן בהצלחה', '');
  }
  updatePartOfPatient(pat_id, pat_part, part) {
    this.allPatientsRef.doc('' + pat_id + '/home' + part).update(pat_part).then(res => {
      return res;
    });
  }


  /**
   * updateMipuyDecideForPlanOfPatient(this.mipuyDecideForPlan, this.Pid);------- add or update
   */
  public updateMipuyDecideForPlanOfPatient(mipuyDecideForPlan: MipuyDecideForPlan, Pid: string) {
    this.afs.collection('patientsData').doc(Pid).collection('mipuyDecideForPlan').doc(mipuyDecideForPlan.mipuy_id_in_db)
    .set(mipuyDecideForPlan).then(res => {
      return res;
    });
  }

  updateGroupTreatmentInfo(treat:GroupTreatmentInfo) {
    this.afs.collection('groupTreatmentInfo').doc('' + treat.insertTime)
    .set(treat).then(res => {
      return res;
    });
  }
  /***************************************************************** */
  /**************************************************** */
  /*****************       delete to db           ******* */

  /**
   * deleteTherapist
   */
  public deleteTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).delete().then(res => {
      return res;
    });
    this.sd.createAlert('success', 'מטפל נמחק בהצלחה', '');
  }


  /**
   * deletePatient
   */
  public deletePatient(patID) {
    this.allPatientsRef.doc('' + patID).delete().then(res => {
          this.sd.createAlert('success', 'תלמיד נמחק בהצלחה', '');
      return res;
    });
  }
deleteGroupTreatmentInfo(treat) {
   this.afs.collection('groupTreatmentInfo').doc('' + treat.insertTime).delete().then(res => {
     console.log(res);
         this.sd.createAlert('success', 'טיפול נמחק בהצלחה', '');
      return res;
    }).catch(err => {
      console.error(err);
          this.sd.createAlert('error', 'שגיאה. נסה שוב', '');
      return err;
    });
}
  /***************************************************************** */
  isDiffiExist(code) {
return false; // ??????????????????????????????????????????????????
  }


  getMipuyForPatient(Pid: string): Observable<Mipuy[]> {
   // this.isBusy = true;
    this.mipuyForPatientRef = this.afs.collection('mipuy', ref => {
      return ref.where('Pid', '==', Pid).orderBy('mipuyDate', 'desc');
    });
    return this.mipuyForPatientRef.valueChanges();
  }


  findTherapistNameById(Tid) {
   for (let i = 0; i < this.allTherapistList.length; i++) {
      if (this.allTherapistList[i].id === Tid) {
        return '' + this.allTherapistList[i].firstName + ' ' + this.allTherapistList[i].lastName;
      }
    }
    return '';
  }
  findPatientNameById(Pid) {
   const  ID = '' + Pid;
    for (let i = 0; i < this.allPatientList.length; i++) {
      if (this.allPatientList[i].id.toString() === ID) {
        return '' + this.allPatientList[i].firstName + ' ' + this.allPatientList[i].lastName;
      }
    }
    return '';
  }
  getAllMethodsRef()/*: Observable<Method[]>*/ {
    return this.allMethodsRef; // .valueChanges();
  }
  getAllTherapistsRef() {
    return this.afs.collection<Therapist>('therapist');
  }
  getTreatmentCategoriesRef() {
    return this.treatmentCategoriesRef;
  }
  getMethodForDiffiRefByDcode(Dcode) {
    return this.afs.collection('methodForDifficult', ref => {
      return ref.where('Dcode', '==', Dcode);
    });
  }
  getTherapistForMethodRefByMcode(Mcode) {
    return this.afs.collection('methodForThertapist', ref => {
      return ref.where('Mcode', '==', Mcode);
    });
  }

  getAprovedPlansForTherapistByTid(Tid) {
    return this.afs.collection('plan', ref => {
      return ref.where('*', '==', Tid);
    });
  }

  getMethodForDiffiRef() {
    return this.afs.collection('methodForDifficult');
  }
  getTherapistForMethodRef() {
    return this.afs.collection('methodForThertapist');
  }
  getPlanForPatientRef(Pid) {
    return this.afs.collection('patientDate').doc(Pid).collection('plans');
  }


  getGradesForPidRef(Pid) {
    return this.afs.collection<GradeForPatient>('grades', ref => {
      return ref.where('Pid', '==', Pid);
    });
  }
    getPatientsByClassRef(classToSearch) {
      console.log(classToSearch);
      return this.afs.collection<Patient>('patients', ref => {
        return ref.where('grade', '==', classToSearch);
      });
    }
  
  getAreasByTherapistIDRef(Tid) {
    return this.afs.collection<AreaForTherapist>('areaForTherapist', ref => {
      return ref.where('id', '==', Tid);
    });
  }


  getTherapistByAreaCodeRef(area) {
    return this.afs.collection<AreaForTherapist>('areaForTherapist', ref => {
      return ref.where('code', '==', area);
    }); 
  }

  getPatsByDiffiCodeRef(Dcode) {
    return this.afs.collection<PatientsDifficult>('patientDifficults', ref => {
      return ref.where('Dcode', '==', Dcode);
    }); 
  }

  getTeamsRef() {
    return this.afs.collection<TreatGroup>('groups');
}

  getTeamPatByGroupCode(groupCode) {
    return this.afs.collection<PatientInGroup>('patientInGroup', ref => {
      return ref.where('groupCode', '==', groupCode);
    });
  }

  getGroupByGroupCodeRef(groupCode) {
    return this.afs.collection<TreatGroup>('groups', ref => {
      return ref.where('groupCode', '==', groupCode);
    });
  }
  


  getGroupByTidRef(Tid) {
    return this.afs.collection<TreatGroup>('groups', ref => {
      return ref.where('Tid', '==', Tid);
    });
  }

  getGroupTreatmentInfoRefByGroupCode(code) {
    return this.afs.collection<GroupTreatmentInfo>('groupTreatmentInfo', ref => {
      return ref.where('groupCode', '==', code);
    });
  }
}
