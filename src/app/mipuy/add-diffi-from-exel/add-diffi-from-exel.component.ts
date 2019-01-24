import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { DbService, Difficulty,  } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'app-add-diffi-from-exel',
  templateUrl: './add-diffi-from-exel.component.html',
  styleUrls: ['./add-diffi-from-exel.component.css']
})
export class AddDiffiFromExelComponent implements OnInit {
 DfromExel: any [];
  constructor(public db: DbService, public sd: ShareDataService) {

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
      this.DfromExel = (XLSX.utils.sheet_to_json(worksheet, { raw: true }));
     // //console.log(this.DfromExel);
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  addDiffiFromExel() {
    let i = 0;
    let countSuccess = 0;
    let countExist = 0;
    let countMiss = 0;
    this.DfromExel.forEach(d => {
      const code = d.Dcode;

      if (this.db.isDiffiExist(code)) {
        countExist++;
        i++;

      } else if (!code) { // requiere data was missed
        this.sd.createAlert('error' , ' בשורה' + (i + 1) + ' חסרים פרטים נדרשים  ', '');
        countMiss++;
        i++;
      }

      const dif: Difficulty = {
       code: d.Dcode,
       description: d.describtion,
       Dfather: d.Dfather,
       isLeave: false,
       index: '' + d.index,
       allFathers: d.all_fathers
      };
      this.db.addDifficult(dif);
     // this.PfromExel.splice(this.PfromExel.indexOf(p) , 1);
     // //console.log(pati);
      countSuccess++;
     // //console.log(this.PfromExel);
    });
    this.sd.createAlert ('info', countSuccess + 'תלמידים נוספו בהצלחה ' + '\n', '');
    if (countExist > 0) {
      this.sd.createAlert('error', countExist + 'תלמידים לא נוספו משום שכבר קימים במערכת ' +  '\n', '');
    }
    if (countMiss > 0) {
     this.sd.createAlert('error', countMiss + 'תלמידים לא נוספו משום שחסרים פרטים אישיים הכרחיים ' + '\n', '');
    }
  }




  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
     // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
     this.sd.routeTo('login');
    }
  }

}
