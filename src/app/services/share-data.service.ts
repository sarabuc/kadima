import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
// import * as writeJsonFile from 'write-json-file';
// import { AlertsService } from '@jaspero/ng2-alerts';
// import { AlertType } from '@jaspero/ng-alerts';
import {Router, ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase';
import * as hebrewDate from 'hebrew-date';
// const hebrewDate = require('hebrew-date');
import { MessageService } from 'primeng/components/common/messageservice';
import { saveAs } from 'file-saver/FileSaver';
@Injectable()
export class ShareDataService {
  msgs = []; // for msgs
  alerts = []; // for  alerts
  // for free time
  TPstatusForTime: string; /*newP, newT, updateP, updateT */

// for therapist and patient card
  activeTabIndex = 0;
// const for enter free all the time - with '-' between hours and # betwwen days
  FREE_ALL_TIME = '';
  daysWithoutFriday = 5;
  hours = 12;
  fridayHours = 4;
 public dergeeForTherapist = ['ללא דרגה', 'מורה בכיר', 'תואר ראשון', 'תואר שני'];
 public kindOfTherapist = ['מלמד', 'הורה', 'תרפיסט', 'מפקח', 'מנהל', 'פסיכולוג', 'פסיכיאטר', 'מורה מקדם',
'מטפל רגשי', 'חונך', 'רופא משפחה', 'מומחה להתפתחות הילד', 'נוירולוג'];
 public treatmentArea = ['לימודי', 'התפתחותי', 'התנהגותי', 'מוטורי', 'תקשורתי'];
 public kupotCholim = ['ללא', 'מכבי', 'כללית', 'מאוחדת', 'לאומית'];
  public FundingFactors = ['הורים', 'מוסד לימודי', 'קופת חולים', 'קופת צדקה', 'ידידות טורונטו', 'יד אליעזר',
  'משרד החינוך שעות שילוב', 'משרד החינוך כיתת קידום', 'מחלקת רווחה', 'משרד הפריפריה', 'קרוב משפחה'];
// public treatmentCategories;



public daysName = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
public hourInDayName = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30' ];
  constructor(/*private _alert: AlertsService*/ private router: Router, private messageService: MessageService, public datepipe: DatePipe) {
    this.initFREE_ALL_TIME();
    console.log(this.convertDateToHebrewDate(26, 10, 2018));
  }


  /****************************************************************** */
  /***************             alert             **************** */
   public createAlert(type, message, tytle) {
     this.alerts.push({ severity: type, summary: tytle, detail: message });
     setTimeout(() => {
       if (this.alerts[0]) {
         this.alerts.splice(0, 1);
       }
  }  , 3000 );
  }
  public createMessage(type, message, tytle) {
    this.msgs.push({ severity: type, summary: tytle, detail: message });
  }

  initFREE_ALL_TIME() {
    for (let i = 0; i < this.daysWithoutFriday; i++) {
      for (let j = 0; j < this.hours; j++) {
        this.FREE_ALL_TIME = this.FREE_ALL_TIME + '1-';
      }
      this.FREE_ALL_TIME = this.FREE_ALL_TIME + '#';
    }

   for (let j = 0; j < this.fridayHours; j++) {
      this.FREE_ALL_TIME = this.FREE_ALL_TIME + '1-';
    }
  }


  parseTimeToStr(table: boolean[][]) {
     let str = '';
    for (let i = 0; i < table.length - 1; i++) {
      for (let j = 0; j < table[i].length; j++) {
        if (table[i][j]) {
          str = str + '1-';
        } else {
          str = str + '0-';
        }
      }
      str = str + '#';
    }

    for (let j = 0; j < this.fridayHours; j++) {
      if (table[table.length - 1][j]) {
       str = str + '1-';
      } else {
        str = str + '0-';
      }
    }
    return str;
  }

  parseTimeFromStr(strTime: string) {

    const arrDay = strTime.split('#');
    let tmpDay;
    const table: boolean[][] = [];
    let i = 0;
    for (; i < this.daysWithoutFriday; i++) {
      tmpDay = arrDay[i].split('-');
      const day = [];
      for (let j = 0; j < this.hours; j++) {
        if (tmpDay[j] === '1') {
          day.push(true);
        } else {
          day.push(false);
        }
      }
      table.push(day);
    }

    // friday
    tmpDay = arrDay[i].split('-');
    const friday = [];
    for (let j = 0; j < this.fridayHours; j++) {
      if (tmpDay[j] === '1') {
        friday.push(true);
      } else {
        friday.push(false);
      }
    }
    table.push(friday);

    return table;
  }
  /**
   * routeTo
   */
  public routeTo(path: string, param?: string) {
    if (param) {
      this.router.navigate([path, param]);
    } else {
      this.router.navigate([path]);
    }

  }
convertDateToHebrewDate(date, month, year) {
  const Hdate =  hebrewDate(year, month, date);
  console.log(Hdate);
  return this.getHebrewDate(Hdate.date) + ' ' + this.getHebrewMonth(Hdate.month) + ' ' + this.getHebrewYear(Hdate.year);
  // [a.slice(0, position), b, a.slice(position)].join('');
}

 private getHebrewYear(year) {
   const yearS = '' + year;
   return this.getGimatryMeot(yearS[1]) + this.getGimatryAsarot(yearS[2]) + this.getGimatryYechidot(yearS[3]);
  }
  private getGimatryYechidot(num) {
    return ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'][num];
  }
  private getGimatryAsarot(num) {
    console.log(num);
    return ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', ''][num];
  }
  private getGimatryMeot(num) {
    console.log(num);
    return ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק', ''][num];
  }
 private getHebrewMonth(month) {
return ['', 'תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'אדר ב', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'][month];
  }
private  getHebrewDate(date) {
return ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'י"א', 'י"ב', 'י"ג', 'י"ד', 'ט"ו', 'ט"ז', 'י"ז', 'י"ח',
 'י"ט', 'כ', 'כ"א', 'כ"ב', 'כ"ג', 'כ"ד', 'כ"ה', 'כ"ו', 'כ"ז', 'כ"ח', 'כ"ט', 'ל'][date];
  }
public convertDateToString(date: Date) {

 return this.datepipe.transform(date, 'dd-MM-yyyy');
}
  public convertDateToStringDD_MM_YYYY(date: Date) {
  
    return '' + date.getDate() + '.' + (date.getMonth() + 1 ) + '.' + date.getFullYear();
  }

public getCsvFile() {
  const mipuyForPatient = firebase.functions().httpsCallable('im_ex');
  mipuyForPatient({ text: '' }).then(res => {
    console.log(res);
 if (res.data === 'success') {
this.getAndDownloadFile('exe/patientData.json', 'data.json', 'dawn');
 }

  }).catch(err => {
    console.log(err);
  });
}


deleteFile(filePath: string, fileName, planDocId, Pid) {
  // Create a reference to the file to delete
  const desertRef = firebase.storage().ref(filePath);

  // Delete the file
  desertRef.delete().then(res => {
    // File deleted successfully
    // have delete from plans collection
    const object: any = {};
    object[fileName] = firebase.firestore.FieldValue.delete();
    firebase.firestore().collection('patientDate').doc(Pid).collection('plans').doc(planDocId).update(object);
    
      this.createAlert('success', 'קובץ נמחק בהצלחה', '');
  }).catch(err => {
    // Uh-oh, an error occurred!
  });
}

  getAndDownloadFile(path, fileName, option) {

    const storageRef = firebase.storage();
    // Create a reference to the file we want to download
    const starsRef = storageRef.ref(path);
    // Get the download URL
    starsRef.getDownloadURL().then(url => {
      console.log(url);
      if (option === 'open') {
        console.log('open');
       const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = fileName;
        a.click();
         //  window.open(url, '_blank');
      } else if (option === 'dawn') {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
          const blob = xhr.response;
          console.log(blob);
          saveAs(blob, fileName);
        };
        xhr.open('GET', url);
        xhr.send();
      }
     
    }).catch(error => {
      console.log(error);
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }


   converrSecondsToDateTime(secs) {
    const t = new Date(); // Epoch
     t.setTime(secs * 1000);
    return t;
}
// getFile() {

  //   const storageRef = firebase.storage();
  //     // Create a reference to the file we want to download
  //   const starsRef = storageRef.ref('files/IMG_4612.jpg');
  //     // Get the download URL
  //     starsRef.getDownloadURL().then(url =>  {
  //       console.log(url);
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = 'blob';
  //       xhr.onload = function (event) {
  //         const blob = xhr.response;
  //         console.log(blob);
  //         saveAs(blob, '123.pdf');
  //       };
  //       xhr.open('GET', url);
  //       xhr.send();
  //     }).catch(error => {
  //       console.log(error.code);
  //       switch (error.code) {
  //         case 'storage/object_not_found':
  //           // File doesn't exist
  //           break;

  //         case 'storage/unauthorized':
  //           // User doesn't have permission to access the object
  //           break;

  //         case 'storage/canceled':
  //           // User canceled the upload
  //           break;

  //     case 'storage/unknown':
  //       // Unknown error occurred, inspect the server response
  //       break;
  //   }
  // });
  // }
}
