import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { DbService, Patient } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-add-patients-from-exel',
  templateUrl: './add-patients-from-exel.component.html',
  styleUrls: ['./add-patients-from-exel.component.scss']
})
export class AddPatientsFromExelComponent implements OnInit {
 PfromExel: any [];
 successed: number[] = [];
  afterUnload = false;
  constructor(public dbs: DbService, public sd: ShareDataService) {
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
      // console.log(this.PfromExel);
    };
    fileReader.readAsArrayBuffer(this.file);
    this.afterUnload = true;
  }

  addPatientFromExel() {
    let i = 0;
    let countSuccess = 0;
    let countExist = 0;
    let countMiss = 0;
    this.PfromExel.forEach(p => {
      const pid = '' + p.id;
      const pfirstName =  p.fname;
      const plastName = p.lname;

      if (this.dbs.isPatientExist(pid)) {
        this.successed[i] = 2;
        countExist++;
        i++;
       // this.sd.createAlert('error', ' תלמיד בשם' + pfirstName + ' ' + plastName + ' ' + 'כבר מופיע במערכת ', '');
      } else if ((!pfirstName) || (!plastName) || (!pid)) { // requiere data was missed
     //   this.sd.createAlert('error' , ' בשורה' + i + ' חסרים פרטים נדרשים ', '');
        this.successed[i] = 2;
        countMiss++;
        i++;
      }

      const pati: Patient = {
        id: '' + p.id,
        firstName: p.fname,
        lastName: p.lname,
        fathersName: p.father,
        fathersPhone: p.fatherPhone,
        mothersPhone: p.motherPhone,
        kupatCholim: p.kupatCholim,
        birthDate: p.birthDate,
        grade: p.grade,
        comment: '',
        haveDificult: 'no',
        strFreeTime: this.sd.FREE_ALL_TIME
      };
      this.dbs.addPatient(pati);
     // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
     // console.log(pati);
      countSuccess++;
      this.successed[i] = 1;
      i++;
     // console.log(this.PfromExel);
    });
    this.sd.createAlert('info', countSuccess + ' ' + 'תלמידים נוספו בהצלחה ' + '\n', '');
    if (countExist > 0) {
      this.sd.createAlert('error', countExist + ' ' + 'תלמידים לא נוספו משום שכבר קימים במערכת ' +  '\n', '');
    }
    if (countMiss > 0) {
     this.sd.createAlert('error', countMiss + ' ' + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
    }
  }

  updatePatientFromExel() {

  }


  ngOnInit() {
  }

}
