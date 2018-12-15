import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { DbService, Patient, PatientsDifficult } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-new-mipuy-from-exel',
  templateUrl: './new-mipuy-from-exel.component.html',
  styleUrls: ['./new-mipuy-from-exel.component.css']
})
export class NewMipuyFromExelComponent implements OnInit {
  fromExel: any[];
  successed: number[] = [];
  afterUnload = false;
  urlImg;
  constructor(public db: DbService, public sd: ShareDataService) {
    //  this.sd.createAlert('success', 'works', 'halevay');
  }


  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  Upload() {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      this.fromExel = (XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      console.log(this.fromExel);
      // this.fromExel.splice(0, 1);
      this.successed = [];
    };
    fileReader.readAsArrayBuffer(this.file);
    this.afterUnload = true;
  }

  addMipuyFromExel() {
let count = 0;
    const date = this.sd.convertDateToStringDD_MM_YYYY(new Date());
   
for (const line of this.fromExel) {
 const Pid = line.id;
 
 if (line.comments) {
// have to add comment
   const com = {
     Pid: Pid,
     commentInfo: line.comments,
     commentDate: new Date()
   };
   this.db.addComment(com);
 }
  if (line.have_dif === 'yes') {
    count ++;
// have to update that have difficults and creat mipuy
    this.db.allPatientsRef.doc('' + Pid).update({haveDificult: 'yes'});
    const docName = '' + Pid + '_' + date;
    const mipuy = {
      Pid: '' + Pid,
      mipuyDate: date,
      planForPatient: ''
    };
    this.db.mipuyForPatientRef.doc(docName).set(mipuy);
    let diffi: PatientsDifficult;
  diffi = {
      Dcode: '',
      Pid: '' + Pid,
      mipuyDate: date,
      status: 'yes'
    };
  for (const key of Object.keys(line)) {
    if ((key !== 'id') && (key !== 'have_dif') && (key !== 'comments') && (line[key] === 'yes')) {
// if have this difficult have to have difficult for patient
count ++;
      diffi.Dcode = key;
      this.db.addPatientDifficult(diffi);
    }
  }
}
}
this.sd.createAlert('success', 'added ' + count + 'times', '');
  }

  //   for (let i = 0; i < this.fromExel.length; i++) {
  //     const p = this.PfromExel[i];
  //     const pid = '' + p.id;
  //     const pfirstName = p.first_name;
  //     const plastName = p.last_name;

  //     if (this.dbs.isPatientExist(pid)) {
  //       this.successed[i] = 2;
  //       countExist++;

  //       // this.sd.createAlert('error', ' תלמיד בשם' + pfirstName + ' ' + plastName + ' ' + 'כבר מופיע במערכת ', '');
  //     } else if ((!pfirstName) || (!plastName) || (!pid)) { // requiere data was missed
  //       //   this.sd.createAlert('error' , ' בשורה' + i + ' חסרים פרטים נדרשים ', '');
  //       this.successed[i] = 3;
  //       countMiss++;

  //     } else {
  //       // have to add this patient
  //       const pati: Patient = {
  //         id: '' + p.id,
  //         firstName: '' + p.first_name,
  //         lastName: '' + p.last_name,
  //         fathersName: '' + this.getData(p.father_name),
  //         fathersPhone: '' + this.getData(p.father_phone),
  //         mothersPhone: '' + this.getData(p.mother_phone),
  //         kupatCholim: '' + this.getData(p.kupat_cholim),
  //         birthDate: '' + this.getData(p.birth_date),
  //         grade: '' + this.getData(p.grade),
  //         comment: '',
  //         haveDificult: 'no',
  //         strFreeTime: this.sd.FREE_ALL_TIME
  //       };
  //       this.dbs.addPatient(pati);
  //       // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
  //       // console.log(pati);
  //       countSuccess++;
  //       this.successed[i] = 1;
  //     }

  //     // console.log(this.PfromExel);
  //   }

  //   this.sd.createAlert('info', countSuccess + ' ' + 'תלמידים נוספו בהצלחה ' + '\n', '');
  //   if (countExist > 0) {
  //     this.sd.createAlert('error', countExist + ' ' + 'תלמידים לא נוספו משום שכבר קימים במערכת ' + '\n', '');
  //   }
  //   if (countMiss > 0) {
  //     this.sd.createAlert('error', countMiss + ' ' + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
  //   }
  // }

  // updatePatientFromExel() {

  //   let countSuccess = 0;
  //   let countNotExist = 0;
  //   let countMiss = 0;
  //   for (let i = 0; i < this.PfromExel.length; i++) {
  //     const p = this.PfromExel[i];
  //     const pid = '' + p.id;
  //     const pfirstName = p.first_name;
  //     const plastName = p.last_name;

  //     if (!this.dbs.isPatientExist(pid)) {
  //       this.successed[i] = 2;
  //       countNotExist++;

  //       // this.sd.createAlert('error', ' תלמיד בשם' + pfirstName + ' ' + plastName + ' ' + 'כבר מופיע במערכת ', '');
  //     } else if ((!pfirstName) || (!plastName) || (!pid)) { // requiere data was missed
  //       //   this.sd.createAlert('error' , ' בשורה' + i + ' חסרים פרטים נדרשים ', '');
  //       this.successed[i] = 3;
  //       countMiss++;

  //     } else {
  //       const myPromise = new Promise((resolve, reject) => {

  //         const patObs: Observable<Patient> = this.dbs.allPatientsRef.doc<Patient>(pid).valueChanges();
  //         patObs.subscribe(pat => {
  //           resolve(pat);
  //         });
  //       });

  //       myPromise.then(pat => {
  //         // const pat: Patient = this.dbs.getPatientById(pid);
  //         const pati: Patient = {
  //           id: '' + p.id,
  //           firstName: '' + p.first_name,
  //           lastName: '' + p.last_name,
  //           fathersName: '' + this.getData(p.father_name),
  //           fathersPhone: '' + this.getData(p.father_phone),
  //           mothersPhone: '' + this.getData(p.mother_phone),
  //           kupatCholim: '' + this.getData(p.kupat_cholim),
  //           birthDate: '' + this.getData(p.birth_date),
  //           grade: '' + this.getData(p.grade),
  //           comment: '',
  //           haveDificult: 'no',
  //           strFreeTime: this.sd.FREE_ALL_TIME
  //         };
          
  //         this.dbs.updatePatient(pati);
  //         countSuccess++;
  //         this.successed[i] = 1;
  //       });
  //       // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
  //       // console.log(pati);

  //     }

  //     // console.log(this.PfromExel);
  //   }

  //   this.sd.createAlert('info', countSuccess + ' ' + 'תלמידים עודכנו בהצלחה ' + '\n', '');
  //   if (countNotExist > 0) {
  //     this.sd.createAlert('error', countNotExist + ' ' + 'תלמידים לא  קימים במערכת ' + '\n', '');
  //   }
  //   if (countMiss > 0) {
  //     this.sd.createAlert('error', countMiss + ' ' + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
  //   }
  // }


  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    

  }
  getData(data) {
    if (data) {
      return data;
    }
    return '';
  }

 


}
