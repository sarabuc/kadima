import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-report-by-area',
  templateUrl: './report-by-area.component.html',
  styleUrls: ['./report-by-area.component.css']
})
export class ReportByAreaComponent implements OnInit {
  areas;
  allAreasF;
  classes;
  allClassesF;
  dateFrom;
  dateTo;
  allDates;
  areasReport = []; // every class is a object in this array

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
      //console.log(this.classes);
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
  //console.log(this.areas);
      // //console.log(allPatsDiffi.docs);
      let filterdPatDif = await allPatsDiffi.docs.filter(D => this.areas.findIndex(second => second.code === D.data().Dcode) > -1);
      this.areas = await this.areas.filter(second => filterdPatDif.findIndex(D => second.code === D.data().Dcode) > -1);
      const allPats = await db.collection('patients').get();
      const filteredPatList = await allPats.docs.filter(P => this.classes.indexOf(P.data().grade) > -1 ); // filtered by classses
      // //console.log(filteredPatList[0].data());
      // filtered all dif list by pat list-
      filterdPatDif = filterdPatDif.filter(P_D => filteredPatList.findIndex(P => P.data().id === P_D.data().PID)); 
      //console.log(filterdPatDif);
      for (const area of this.areas) {
        const areaInfo = {};
        areaInfo['code'] = area.code;
        areaInfo['father'] = area.Dfather;
        const filteredPatDifForArea = filterdPatDif.filter(P_D => P_D.data().Dcode === area.code);
        // //console.log(filteredPatDifForArea[0].data());
        // //console.log(filteredPatList[0].data());
        const filteredPatDetailsForArea = filteredPatList.filter(P =>
                                          filteredPatDifForArea.findIndex(P_D => P_D.data().Pid === P.data().id) > -1);
         //console.log(filteredPatDetailsForArea.map(D => D.data()));
        areaInfo['patsInfo'] = filteredPatDetailsForArea;
        this.areasReport.push(areaInfo);
        // //console.log(this.areasReport);
      }

      this.db.isBusy = false;
    } catch (err) {
      //console.error(err);
      this.sd.createAlert('error', 'שגיאה - נסה שוב או פנה למנהל המערכת', '');
      this.db.isBusy = false;
    }
  }





  //  private exportAs(type) {
  //    //console.log(type);
  //     // download the file using old school javascript method
  //     this.exportAsService.save(this.exportAsConfig, 'report.pdf');
  //     // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
  //   //  this.exportAsService.get(this.exportAsConfig).subscribe(content => {
  //   //     //console.log(content);
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
        const imgWidth = 210;
        const pageHeight = 297;
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
        const fileName = 'דוח לפי תחומים.pdf';

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
