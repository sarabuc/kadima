import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { DbService, Patient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-add-patients-from-exel',
  templateUrl: './add-patients-from-exel.component.html',
  styleUrls: ['./add-patients-from-exel.component.scss']
})
export class AddPatientsFromExelComponent implements OnInit {
 PfromExel: any [];
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
      this.PfromExel = (XLSX.utils.sheet_to_json(worksheet, { raw: true }));
       //console.log(this.PfromExel);
       this.PfromExel.splice(0, 1);
       this.successed = [];
    };
    fileReader.readAsArrayBuffer(this.file);
    this.afterUnload = true;
  }

  addPatientFromExel() {

    let countSuccess = 0;
    let countExist = 0;
    let countMiss = 0;
   for (let i = 0; i < this.PfromExel.length; i++) {
     const p = this.PfromExel[i];
      const pid = '' + p.id;
      const pfirstName =  p.first_name;
      const plastName = p.last_name;

      if (this.db.isPatientExist(pid)) {
        this.successed[i] = 2;
        countExist++;

       // this.sd.createAlert('error', ' תלמיד בשם' + pfirstName + ' ' + plastName + ' ' + 'כבר מופיע במערכת ', '');
      } else if ((!pfirstName) || (!plastName) || (!pid)) { // requiere data was missed
     //   this.sd.createAlert('error' , ' בשורה' + i + ' חסרים פרטים נדרשים ', '');
        this.successed[i] = 3;
        countMiss++;

      } else {
// have to add this patient
      const pati: Patient = {
        id: '' + p.id,
        firstName: '' + p.first_name,
        lastName: '' + p.last_name,
        fathersName: '' + this.getData(p.father_name),
        fathersPhone: '' + this.getData(p.father_phone),
        mothersPhone: '' + this.getData(p.mother_phone),
        kupatCholim: '' + this.getData(p.kupat_cholim),
        birthDate: '' + this.getData(p.birth_date),
        grade: '' + this.getData(p.grade),
        comment: '',
        haveDificult: 'no',
        strFreeTime: this.sd.FREE_ALL_TIME
      };
      this.db.addPatient(pati);
     // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
     // //console.log(pati);
      countSuccess++;
      this.successed[i] = 1;
    }

     // //console.log(this.PfromExel);
    }

    this.sd.createAlert('info', countSuccess + ' ' + 'תלמידים נוספו בהצלחה ' + '\n', '');
    if (countExist > 0) {
      this.sd.createAlert('error', countExist + ' ' + 'תלמידים לא נוספו משום שכבר קימים במערכת ' +  '\n', '');
    }
    if (countMiss > 0) {
     this.sd.createAlert('error', countMiss + ' ' + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
    }
  }

  updatePatientFromExel() {

    let countSuccess = 0;
    let countNotExist = 0;
    let countMiss = 0;
    for (let i = 0; i < this.PfromExel.length; i++) {
      const p = this.PfromExel[i];
      const pid = '' + p.id;
      const pfirstName = p.first_name;
      const plastName = p.last_name;

      if (!this.db.isPatientExist(pid)) {
        this.successed[i] = 2;
        countNotExist++;

        // this.sd.createAlert('error', ' תלמיד בשם' + pfirstName + ' ' + plastName + ' ' + 'כבר מופיע במערכת ', '');
      } else if ((!pfirstName) || (!plastName) || (!pid)) { // requiere data was missed
        //   this.sd.createAlert('error' , ' בשורה' + i + ' חסרים פרטים נדרשים ', '');
        this.successed[i] = 3;
        countMiss++;

      } else {
       const myPromise = new Promise((resolve, reject) => {

         const patObs: Observable<Patient> =  this.db.allPatientsRef.doc<Patient>(pid).valueChanges();
         patObs.subscribe(pat => {
            resolve(pat);
          });
        });

        myPromise.then(pat => {
         // const pat: Patient = this.dbs.getPatientById(pid);
      const pati: Patient = {
            id: '' + p.id,
            firstName: '' + p.first_name,
            lastName: '' + p.last_name,
            fathersName: '' + this.getData(p.father_name),
            fathersPhone: '' + this.getData(p.father_phone),
            mothersPhone: '' + this.getData(p.mother_phone),
            kupatCholim: '' + this.getData(p.kupat_cholim),
            birthDate: '' + this.getData(p.birth_date),
            grade: '' + this.getData(p.grade),
            comment: '',
            haveDificult: 'no',
            strFreeTime: this.sd.FREE_ALL_TIME
          };
        //  pat.id =  '' + p.id;
        //   pat.firstName = '' + p.first_name;
        //   pat.lastName = '' + p.last_name;
        //   pat.fathersName = '' + this.getData(p.father_name);
        //   pat.fathersPhone = '' + this.getData(p.father_phone);
        //   pat.mothersPhone =  '' + this.getData(p.mother_phone);
        //   pat.kupatCholim =  '' + this.getData(p.kupat_cholim);
        //   pat.birthDate = '' + this.getData(p.birth_date);
        //   pat.grade = '' + this.getData(p.grade);

          this.db.updatePatient(pati);
            countSuccess++;
            this.successed[i] = 1;
        });
        // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
        // //console.log(pati);

      }

      // //console.log(this.PfromExel);
    }

    this.sd.createAlert('info', countSuccess + ' ' + 'תלמידים עודכנו בהצלחה ' + '\n', '');
    if (countNotExist > 0) {
      this.sd.createAlert('error', countNotExist + ' ' + 'תלמידים לא  קימים במערכת ' + '\n', '');
    }
    if (countMiss > 0) {
      this.sd.createAlert('error', countMiss + ' ' + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
    }
  }


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

  getEmptyPatientsFile() {
    const spaceRef = firebase.storage().ref().child('files/patient_tavnit.xlsx').getDownloadURL().then((url) => {
     //console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = 'blob';
      // xhr.onload = (event) => {
      //   /* Create a new Blob object using the response
      //   *  data of the onload object.
      //   */
      //   const blob = new Blob([xhr.response], { type: 'file/xlsx' });
      //   const a: any = document.createElement('a');
      //   a.style = 'display: none';
      //   document.body.appendChild(a);
      //   const _url = window.URL.createObjectURL(blob);
      //   a.href = _url;
      //   a.download = 'patient_tavnit.xlsx';
      //   a.click();
      //   window.URL.revokeObjectURL(_url);
      // };
      // xhr.open('GET', url);
      // xhr.send();

    //   let xhr = new XMLHttpRequest();

    // //  // xhr.responseType = 'blob';
    //   xhr.onload = function (event) {
    //     const blob = xhr.response;
    //   };
    //   xhr.open('GET', 'https://drive.google.com/open?id=1fQ7EQCYUx-mroQreTOHDpn0JbAD2y8U4');
    //    xhr.send();

    }).catch((error) => {

      //console.log(error.code);
    });
  }



}
