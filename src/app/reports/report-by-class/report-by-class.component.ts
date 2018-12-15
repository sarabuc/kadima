import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
// report all difficult in class - for each patient
@Component({
  selector: 'app-report-by-class',
  templateUrl: './report-by-class.component.html',
  styleUrls: ['./report-by-class.component.css']
})
export class ReportByClassComponent implements OnInit {
  // exportAsConfig: ExportAsConfig = {
  //   type: 'pdf', // the type you want to download
  //   elementId: 'mytable', // the id of html/table element
  //   options: { // html-docx-js document options
  //     orientation: 'portrait',
  //     margins: {
  //       top: '20'
  //     }
  //   }
  // };
  areas;
  allAreasF;
  classes;
  allClassesF;
  dateFrom;
  dateTo;
  allDates;
  classesReport = []; // every class is a object in this array

  // sideDetails
  createBy;
  createTime;


  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    this.areas = this.sd.areasForReport;
    this.allAreasF = this.sd.allAreaFForReport;
    this.classes = this.sd.classesForReport;
    this.allClassesF = this.sd.allClassesFForReport;
    this.dateFrom = this.sd.dateFromForReport;
    this.dateTo = this.sd.dateToForReport;
    this.allDates = this.sd.allDateForReport;
    if (this.allAreasF) {
      this.areas = this.db.secondCategories;
    }
    if (this.allClassesF) {
      this.classes = this.sd.allClasses;
      console.log(this.classes);
    }
    if (this.allDates) {
      this.dateFrom = '01/01/1990';
      this.dateTo = '31/12/2030';
    }
    this.createBy = this.db.userNow.name;
    this.createTime = this.sd.convertDateToStringDD_MM_YYYY(new Date());
    this.createReport();
  }

  async createReport() {
    this.db.isBusy = true;
    try {
      const db = firebase.firestore();
      const allPatsDiffi = await db.collection('patientDifficults').get();
       /* .where('mipuyDate', '>=', this.dateFrom)
        .where('mipuyDate', '<=', this.dateTo)
        .get();*/
      console.log(this.areas);

      console.log(allPatsDiffi.docs);
      const filterdPatDif = await allPatsDiffi.docs.filter(D => this.areas.findIndex(second => second.code === D.data().Dcode) > -1);
      this.areas = await this.areas.filter(second => filterdPatDif.findIndex(D => second.code === D.data().Dcode) > -1);

      // all classes was choosed
      console.log(filterdPatDif);
      console.log(this.classes);
      for (const className of this.classes) {
        console.log('in class');
        const classInfo = {};
        classInfo['patsInfo'] = [];
        const tempInfo = await db.collection('classes').doc(className).get();
        classInfo['className'] = className;
        classInfo['teacherName'] = tempInfo.data() ? tempInfo.data().teacherName : 'לא קים במערכת';
        console.log(classInfo);
        // have insert main details of class
        const allPatientInClass = await db.collection('patients').where('grade', '==', className).get();
        allPatientInClass.docs.sort((a, b) => a.data().lastName.localeCompare(b.data().lastName));
        console.log(allPatientInClass);

        // all pats in class
        for (const pat of allPatientInClass.docs) {
          const patInfo = {};
          patInfo['Pid'] = pat.data().id;
          patInfo['firstName'] = pat.data().firstName;
          patInfo['lastName'] = pat.data().lastName;
          patInfo['comment'] = pat.data().comment;
          patInfo['haveDifficult'] = pat.data().haveDificult;
          if (pat.data().haveDificult === 'yes') {
            const filterdForPat = filterdPatDif.filter(D => D.data().Pid = pat.data().id);
            console.log(patInfo);

            // all dif for patient
            for (const dif of filterdForPat) {
              patInfo[dif.data().Dcode] = dif.data().degree ? dif.data().degree : 1;
            }
            console.log(patInfo);

          }
          classInfo['patsInfo'].push(patInfo);
        }
        this.classesReport.push(classInfo);
        console.log(this.classesReport);

            }

      this.db.isBusy = false;
    } catch (err) {
      console.error(err);
      this.sd.createAlert('error', 'שגיאה - נסה שוב או פנה למנהל המערכת', '');
      this.db.isBusy = false;
    }
  }





//  private exportAs(type) {
//    console.log(type);
//     // download the file using old school javascript method
//     this.exportAsService.save(this.exportAsConfig, 'report.pdf');
//     // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
//   //  this.exportAsService.get(this.exportAsConfig).subscribe(content => {
//   //     console.log(content);
//   //   });
//   }

  generatePdf() {
    // const pdf = new jsPDF('p', 'pt', 'a4');
    // pdf.addHTML(document.getElementById('html2Pdf'), function () {
    //   pdf.save('Test.pdf');
    // });
    try {
      this.db.isBusy = true;
    const div = document.getElementById('html2Pdf');
    const options = { background: 'white', height: div.clientHeight, width: div.clientWidth };

    html2canvas(div, options).then((canvas) => {
      // Initialize JSPDF
      const doc = new jsPDF('l', 'mm', 'a4');
      // Converting canvas to Image
      const imgWidth = 297;
      const pageHeight = 210;
      const imgData = canvas.toDataURL('image/PNG');
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      // Add image Canvas to PDF
      // doc.addImage(imgData, 'PNG', 20, 20, 180, 150);
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const pdfOutput = doc.output();
      // using ArrayBuffer will allow you to put image inside PDF
      const buffer = new ArrayBuffer(pdfOutput.length);
      const array = new Uint8Array(buffer);
      for (let i = 0; i < pdfOutput.length; i++) {
        array[i] = pdfOutput.charCodeAt(i);
      }

      // Name of pdf
      const fileName = 'דוח לפי כתה.pdf';

      // Make file
      doc.save(fileName);
 this.db.isBusy = false;
    });
  } catch (err) {
    this.db.isBusy = false;
    this.sd.createAlert('error', 'ארעה שגיאה. בדוק את הנתונים ונסה שוב', '');
  }

}
}
