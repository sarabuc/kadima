import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import * as hebrewDate from 'hebrew-date';
// const hebrewDate = require('hebrew-date');
import { MessageService } from 'primeng/components/common/messageservice';
import { saveAs } from 'file-saver/FileSaver';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ShareDataService {
  useML = true;
  dictionary;
  msgs = []; // for msgs
  alerts = []; // for  alerts
  dateRegex: RegExp = /^([0-2][0-9]|(3)[0-1])(.)(((0)[0-9])|((1)[0-2]))(.)\d{4}$/;
  timeRegex: RegExp = /^([0-1][0-9]|(2)[0-3])(:)([0-5][0-9])$/;
  hourRegex: RegExp = /^([0-1][0-9]|(2)[0-3])(:00)$/;


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
  public hebrew = {
    firstDayOfWeek: 0,
    dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    dayNamesShort: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'],
    dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'שבת'],
    monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    today: 'היום',
    clear: 'נקה'
  };


  hebrewDays_all = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'י"א', 'י"ב', 'י"ג', 'י"ד', 'ט"ו', 'ט"ז', 'י"ז', 'י"ח',
    'י"ט', 'כ', 'כ"א', 'כ"ב', 'כ"ג', 'כ"ד', 'כ"ה', 'כ"ו', 'כ"ז', 'כ"ח', 'כ"ט', 'ל',
    'יא', 'יב', 'יג', 'יד', 'טו', 'טז', 'יז', 'יח', 'יט', 'כא', 'כב', 'כג', 'כד', 'כה', 'כו', 'כז', 'כח', 'כט'
  ];
  hebrewMonthes_all = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'אדר ב', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול',
    'חשוון', 'סיוון', 'איר', 'אדר א', 'נסן', 'כסלו'];
  hebrewYear_all = ['תשעח', 'תשעט', 'תשע"ח', 'תשע"ט', 'תשפ', 'תש"פ', 'תשעז', 'תשע"ז'];
  hebrewDays = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'י"א', 'י"ב', 'י"ג', 'י"ד', 'ט"ו', 'ט"ז', 'י"ז', 'י"ח',
    'י"ט', 'כ', 'כ"א', 'כ"ב', 'כ"ג', 'כ"ד', 'כ"ה', 'כ"ו', 'כ"ז', 'כ"ח', 'כ"ט', 'ל'];
  hebrewMonthes = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'אדר ב', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
  hebrewMonthesInEnglish = ['Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Shvat', 'Adar1', 'Adar2',
    'Nisan', 'Iyyar', 'Sivan', 'Tamuz', 'Av', 'Elul'];
  hebrewYear = ['תשעח', 'תשעט'];
  hebrewYearStartFrom = 5778; // תשע"ח
  classes = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  allClasses;
  public daysName = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  public hourInDayName = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];


  // FOR REPORTS
  areasForReport;
  allAreaFForReport;
  classesForReport;
  allClassesFForReport;
  dateFromForReport;
  dateToForReport;
  allDateForReport;

  groupOrPatForReport;
  allTherapistFForReport;
  allPatientFForReport;
  allGroupFForReport;
  selectedTidForRport;
  selectedPatForReport;
  selectedGroupForReport;
  allGroupsForTherapistForReport;
  allPatsFotTherapistForReport;
  // END FOR REPORTS


  // FOR MAILS
  amountMailsInShortStatus;
  // END FOR MAILS

  constructor(/*private _alert: AlertsService*/ private router: Router,
    private messageService: MessageService, public datepipe: DatePipe,
    private http: HttpClient) {
    this.convertHebrewToNormalDate(1, 2, 1);
    this.initFREE_ALL_TIME();
    this.INIT_dictionary();
    this.INIT_ALL_CLASSES();
  }


  /****************************************************************** */
  /***************             alert             **************** */
  public createAlert(type, message, tytle) {
    this.alerts.push({ severity: type, summary: tytle, detail: message });
    setTimeout(() => {
      if (this.alerts[0]) {
        this.alerts.splice(0, 1);
      }
    }, 3000);
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
      console.log(param);
      this.router.navigate([path, param]);
    } else {
      this.router.navigate([path]);
    }

  }
  convertDateToHebrewDate(date, month, year) {
    const Hdate = hebrewDate(+year, +month, +date);

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
    return ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', ''][num];
  }
  private getGimatryMeot(num) {
    return ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק', ''][num];
  }
  private getHebrewMonth(month) {
    return this.hebrewMonthes[month - 1];
  }
  private getHebrewDate(date) {
    return this.hebrewDays[date - 1];
  }
  public convertDateToString(date: Date) {

    return this.datepipe.transform(date, 'dd-MM-yyyy');
  }
  public convertDateToStringDD_MM_YYYY(date: Date) {

    return '' + this.getDateDay(date.getDate()) + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
  }

  private getDateDay(num: number) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
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


  async deleteFile(filePath: string, fileName, planDocId, Pid) {
    console.log(fileName);
    // Create a reference to the file to delete
    const desertRef = firebase.storage().ref(filePath);

    // Delete the file
    desertRef.delete().then(async (res) => {
      // File deleted successfully
      // have delete from plans collection
      // const object: any = {};

      const docRef = firebase.firestore().collection('patientDate').doc(Pid).collection('plans').doc(planDocId);
      const tempD = await docRef.get();
      const temp = tempD.data();
      temp['' + fileName] = 'deleted';
      console.log(temp);
      docRef.update(temp).then(res2 => {
        this.createAlert('success', 'קובץ נמחק בהצלחה', '');
      });
     
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
        // a.target = '_blank'
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




  public async convertHebrewToNormalDate(day: number, month: number, year: number): Promise<any> {
    // https://www.hebcal.com/converter/?cfg=json&hy=5749&hm=Kislev&hd=25&h2g=1

    const Tyear = this.hebrewYearStartFrom + year;
    const Tmonth = this.hebrewMonthesInEnglish[month];
    const url = 'https://www.hebcal.com/converter/?cfg=json&hy=' + Tyear + '&hm=' + Tmonth + '&hd=' + day + '&h2g=1';

    const Dres = await this.http.get(url);
    return Dres; /*
  Dres.subscribe(res => {
      console.log(res);
      const Lday = (res as any).gd;
      const Lmonth = (res as any).gm;
      const Lyear = (res as any).gy;
      return Promise.resolve('' + Lday + '.' + Lmonth + '.' + Lyear);
    });*/
    /* console.log(res);
     const Lday = (res as any).gd;
     const Lmonth = (res as any).gm;
     const Lyear = (res as any).gy;
     return Promise.resolve('' + Lday + '.' + Lmonth + '.' + Lyear);*/

  }




  INIT_dictionary() {
    this.dictionary = {
      date: 'תאריך',
      hours: 'שעות',
      subject: 'נושא',
      aprovedHours: 'שעות מאושרות',
      name: 'שם',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      comment: 'הערה',
      method: 'שיטה',
      index: 'אינדקס',
      group: 'קבוצה',
      area: 'תחום',
      difficult: 'קושי',
      grade: 'כתה',
      gradeOfTest: 'ציון מבחן',
      startTime: 'שעת התחלה',
      endTime: 'שעת סיום'

    };
  }

  INIT_ALL_CLASSES() {
    this.allClasses = [];
    for (const cl of this.classes) {
      this.allClasses.push('' + cl + '-1');
      this.allClasses.push('' + cl + '-2');
    }
  }
}
