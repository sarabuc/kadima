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
  birthDate: Date;
  grade: string;
  comment: string;
  strFreeTime: string;
  haveDificult: boolean;
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
}

export interface Method {
  code: string;
  description: string;
}

/*export interface TreatmentCategory {
  code: string;
  description: string;
}*/
 export interface PatientsDifficult {
   Pid: string;
   Dcode: string;
   mipuyDate: Date;
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
   treatmentNumber: number; // timestemp
   treatDate: Date;
   startTime: Time;
   endTime: Time;
   hours: number;
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
// list
public userNameList: string[] = [];
public therapistIDList: string[] = [];
public patientIDList: string[] = [];
public allDifficultsList: Difficulty[] = [];
public allMethodsList: Method[] = [];
public allPatientList: Patient[] = [];
public allTherapistList: Therapist[] = [];
public isBusy = false;
public userNow: User;
public isLoginV = true;
public newMipuy: string[] = [];

  constructor(private afs: AngularFirestore , private sd: ShareDataService) {
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
     // get all patients id
     this.allPatientsRef = this.afs.collection('patients');
     this.allPatientsRef.valueChanges().subscribe(pats => {
       pats.forEach(pat => {
         this.patientIDList.push(pat.id);
         this.allPatientList.push(pat);
         console.log(pat);
       });
     });
     // get all therapist id
     this.allTherapistsRef = this.afs.collection('therapist');
     this.allTherapistsRef.valueChanges().subscribe(theras => {
       console.log(theras);
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
     this.allDifficultsRef = this.afs.collection('difficults');
     this.allMethodsRef = this.afs.collection('methods');

      this.allPatientsCommentRef = this.afs.collection('patientsComments');
   }

   isLogin() {
     return this.isLoginV;
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
console.log(res);
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





  /**************************************************** */
  /*****************       update to db           ******* */

  /**
   * updateTherapist
   */
  public updateTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).update(th).then(res => {
      console.log('11111111111111111111111111111111');

    });
    this.sd.createAlert('success', 'מטפל עודכן בהצלחה', '');
  }

}
