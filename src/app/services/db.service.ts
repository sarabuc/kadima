import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { ShareDataService } from './share-data.service';

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
  address?: string;
  morePhone?: string;
  mothersName?: string;
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
  mipuyDate: string;
  planForPatient: string;
}
 export interface PatientsDifficult {
   Pid: string;
   Dcode: string;
   mipuyDate: string;
   status: string; // yes or maybe or not-relevant
 }
 export interface TherapistMethods {
   Tid: string;
   Mcode: string;
  // priceForLesson: number;
 }
 export interface MethodForDifficulty {
   Mcode: string;
   Dcode: string;
 }
 export interface PlanForPatient {
   Pid: string;
   history: string;
   parentsApproved: string;
   approvedAmountLesson: number;
   payer: string;
   haveDueDate: boolean;
   dueDate?: Date;
   // progressionNumber: number;
   mipuy_id_in_db: string;
   date: string;
   [k: string]: any; // key loos like DIFNAME_THERPIST or DIFNAME_METHOD or DIFNAME and than the value
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
export interface MipuyDecideForPlan {
  Pid: string;
  mipuy_id_in_db: string;
  date?: Date;
  [k: string]: any; // key loos like DIFNAME_THERPIST or DIFNAME_METHOD and than the value
}

export interface MassageForUser {
 userId: string;
 massage: string;
 date: Date;
kind: string;
comments: string;
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
     const limu = 'לימודי';
     this.allDifficultsRef = this.afs.collection('difficults');
    //  this.allDifficultsRef.valueChanges().subscribe(diffs => {
    //    this.allDifficultsList = diffs;
    //  });


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
   });
  }

  /**
   * addDifficult
   */
  public addDifficult(diffi: Difficulty) {
    this.allDifficultsRef.doc('' + diffi.code + '_' + diffi.Dfather).set(diffi).then(res => {

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
}

/**
 * addMethod
method: Method */
public addMethod(method: Method) {
  this.allMethodsRef.add(method).then(res => {
    this.sd.createAlert('success', 'שיטה נוספה בהצלחה', '');
  });

}
  /**
     * addMethodForDifficult
     */
  public addMethodForDifficult(methodForDifficult: MethodForDifficulty) {
    this.methodForDifficultyRef.doc('' + methodForDifficult.Dcode + '_' + methodForDifficult.Mcode).set(methodForDifficult);
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
    comments: comment
  };
  this.afs.collection('users').doc(this.userNow.id).collection('massages').add(M);
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
   
    this.methodForTherapistRef.doc('' + theraForMethod.Tid + '_' + theraForMethod.Mcode).set(theraForMethod);
  }


  /**
   * addPlanForPatient
   */
  public addPlanForPatient(plan: PlanForPatient, docName: string) {
    this.getPlanForPatientRef(plan.Pid).doc(docName).set(plan).then(res => {
      this.sd.createAlert('success', 'תכנון עודכן בהצלחה', '');
    });
    }

  /**************************************************** */
  /*****************       update to db           ******* */

  /**
   * updateTherapist
   */
  public updateTherapist(th) {
    this.allTherapistsRef.doc('' + th.id).update(th).then(res => {
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


  /**
   * updateMipuyDecideForPlanOfPatient(this.mipuyDecideForPlan, this.Pid);------- add or update
   */
  public updateMipuyDecideForPlanOfPatient(mipuyDecideForPlan: MipuyDecideForPlan, Pid: string) {
    this.afs.collection('patientsData').doc(Pid).collection('mipuyDecideForPlan').doc(mipuyDecideForPlan.mipuy_id_in_db)
    .set(mipuyDecideForPlan);
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
    return this.allTherapistsRef;
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

  getMethodForDiffiRef() {
    return this.afs.collection('methodForDifficult');
  }
  getTherapistForMethodRef() {
    return this.afs.collection('methodForThertapist');
  }
  getPlanForPatientRef(Pid) {
    return this.afs.collection('patientDate').doc(Pid).collection('plans');
  }
}
