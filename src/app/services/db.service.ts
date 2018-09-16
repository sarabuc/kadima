import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { ShareDataService } from './share-data.service';
import { Time } from '@angular/common';

export interface User {
  isAdmin: boolean;
  userName: string;
  password: string;
  mail: string;
  name: string;
  id: string;
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
}
export interface PatientFile {
  Pid: string;
  fileName: string;
  date: Date;
}
export interface PatientComment {
  Pid: string;
  commentDate: Date;
  commentInfo: string;
}
export interface Difficulty {
  code: string;
  description: string;
  Dfather: string;
  isLeave: boolean;
  index: string;
  allFathers: string;
}

export interface Method {
  code: string;
  description: string;
}
export interface Mipuy {
  Pid: string;
  mipuyDate: Date;
}

/*export interface TreatmentCategory {
  code: string;
  description: string;
}*/
 export interface PatientsDifficult {
   Pid: string;
   Dcode: string;
   mipuyDate: Date;
   status: string; // yes or maybe or not-relevant
 }
 export interface TherapistMethods {
   Tid: string;
   Mcode: string;
   priceForLesson: number;
 }
 export interface MethodForDifficulty {
   Mcode: string;
   Dcode: string;
 }
 export interface PlanForPatient {
   Pid: string;
   parentsApproved: boolean;
   approvedAmountLesson: number;
   progressionNumber: number;
 }
 /*export interface PayTreatment {
  Pid: string;
  payer: string;
  approvedAmount: number;
 }*/
 export interface TreatmentProgression {
  Pid: string;
  // Tid: string;
  progressCode: string; // timestemp
  diffiCode: string;
  methodCode: string;
  approvedAmountLesson: number;
  paysBy: string;
 }
export interface TreatmentInfo { // key is Tid-treatmentNumber to example: 1234-519898195149
   Pid: string;
   Tid: string;
   progressionCode: string;
   kind: string;
   treatmentNumber: string; // timestemp
   treatDate: Date;
   startTime: string;
   endTime: string;
   hours: string;
   description: string;
   comment: string;
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
public treatmentProgressionRef: AngularFirestoreCollection<TreatmentProgression>;
public treatmentInfoForProgressRef: AngularFirestoreCollection<TreatmentInfo>;
  public mipuyForPatientRef: AngularFirestoreCollection<Mipuy>;
  public patientsFileRef: AngularFirestoreCollection<PatientFile>;
  treatmentCategoriesRef: AngularFirestoreCollection<Difficulty>;
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
       pats.forEach(pat => {
         this.patientIDList.push(pat.id);

       //  console.log(pat);
       });
     });
     // get all therapist id
     this.allTherapistsRef = this.afs.collection('therapist');
     this.allTherapistsRef.valueChanges().subscribe(theras => {
     //  console.log(theras);
       theras.forEach(th => {
         this.therapistIDList.push(th.id);
         this.allTherapistList.push(th);
       });
     });

     // get all methods
     this.allMethodsRef = this.afs.collection('methods');
     this.allMethodsRef.valueChanges().subscribe(methods => {
       this.allMethodsList = methods;
     });
     // get all difficults ref
     const limu = 'לימודי';
     this.allDifficultsRef = this.afs.collection('difficults');
    //  this.allDifficultsRef.valueChanges().subscribe(diffs => {
    //    this.allDifficultsList = diffs;
    //  });
     this.allMethodsRef = this.afs.collection('methods');

      this.allPatientsCommentRef = this.afs.collection('patientsComments');
      this.difficultForPatientRef = this.afs.collection('patientDifficults');
      this.mipuyForPatientRef = this.afs.collection('mipuy');
     this.treatmentInfoForProgressRef = this.afs.collection('treatmentInfo');
     this.patientsFileRef = this.afs.collection('patientFile');
   }

   isLogin() {
	   return true;
    // return this.isLoginV;
   }




  /**
   * getDifficultsByPatientId
   */
  public getDifficultsByPatientId(Pid: string) {

  }
  /**
   * getMethodsByTherapistId
   */
  public getMethodsByTherapistId(Tid: string) {

  }

  /**
   * getPatientsByDifficult
   */
  public getPatientsByDifficult(Dcode: string) {

  }
  /**
   * getThrapistByMethod
   */
  public getThrapistByMethod(Mcode: string) {

  }
  /**
   * getPatientsByCategory
   */
  public getPatientsByCategory(Ccode: string) {

  }
  /**
   * getTherapistByCategory
   */
  public getTherapistByCategory(Ccode: string) {

  }
  /**
   * getMethodsByDifficulty
   */
  public getMethodsByDifficulty(Dcode: string) {


  }
  /**
   * getTableOfFreeTime
   */
  public getTableOfFreeTime(freeStr: string) {

  }

  /**
   * getEmail
   */
  public getEmail() {

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
    this.allTherapistsRef.doc('' + thera.id).set(thera).then(res => {
    });
    this.sd.createAlert('info', 'מטפל בשם' + thera.firstName + thera.lastName + 'נוסף בהצלחה', '');
  }

  /**
   * addPatient
   */
  public addPatient(pati: Patient) {
   this.allPatientsRef.doc('' + pati.id).set(pati).then(res => {
// console.log(res);
   });
  }

  /**
   * addDifficult
   */
  public addDifficult(diffi: Difficulty) {
    this.allDifficultsRef.doc('' + diffi.code).set(diffi).then(res => {

    });
  }

/**
 * addComment
 */
public addComment(com: PatientComment) {
  this.allPatientsCommentRef.add(com);
}

/**
 * addPatientDifficult
 */
public addPatientDifficult(diffi: PatientsDifficult) {
  this.difficultForPatientRef.add(diffi);
}

/**
 * addTreatmentInfo
 */
public addTreatmentInfo( treat: TreatmentInfo) {
  this.treatmentInfoForProgressRef.add(treat);
 // console.log(treat);
}



  /**************************************************** */
  /*****************       update to db           ******* */

  /**
   * updateTherapist
   */
  public updateTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).update(th).then(res => {
    //  console.log('11111111111111111111111111111111');

    });
    this.sd.createAlert('success', 'מטפל עודכן בהצלחה', '');
  }


  /**
   * updatePatient
   */
  public updatePatient(pat) {
    this.allPatientsRef.doc('' + pat.id).update(pat).then(res => {
    });
     this.sd.createAlert('success', 'תלמיד עודכן בהצלחה', '');
  }
  updatePartOfPatient(pat_id, pat_part, part) {
    this.allPatientsRef.doc('' + pat_id + '/home' + part).update(pat_part).then(res => {
    });
  }

  /***************************************************************** */
  /**************************************************** */
  /*****************       delete to db           ******* */

  /**
   * deleteTherapist
   */
  public deleteTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).delete();
    this.sd.createAlert('success', 'מטפל נמחק בהצלחה', '');
  }


  /**
   * deletePatient
   */
  public deletePatient(patID) {
    this.allPatientsRef.doc('' + patID).delete();
    this.sd.createAlert('success', 'תלמיד נמחק בהצלחה', '');
  }

  /***************************************************************** */
  isDiffiExist(code) {
return false; // ??????????????????????????????????????????????????
  }


  getMipuyForPatient(Pid: string) {
   // this.isBusy = true;
    this.mipuyForPatientRef = this.afs.collection('mipuy', ref => {
      return ref.where('Pid', '==', Pid).orderBy('mipuyDate', 'desc');
    });
    // this.mipuyForPatientRef.valueChanges().subscribe(mipuy => {
    //   this.mipuyForPatientList = mipuy;
    //   this.isBusy = false;
    //   this.mipuyForPatientRef = this.afs.collection('mipuy');
    // });
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
  // getPatientById(pid): Patient {
  //     const myPromise = new Promise((resolve, reject) => {

  //        const patObs: Observable<Patient> =  this.allPatientsRef.doc<Patient>(pid).valueChanges();
  //        patObs.subscribe(pat => {
  //           resolve(pat);
  //           reject(pat);
  //         });
  //       }).then(pat => {
  //         return pat;
  //       });

  //       // myPromise.then(pat => {
  //       // return pat;
  //       // });
  // }

}
