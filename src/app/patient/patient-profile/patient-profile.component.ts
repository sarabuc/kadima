import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  @Input() pat: Patient;
  @Input() Pid: string;
  @Input() status: string;
  uploadedFiles: any[] = [];
  constructor(public db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
    this.Pid = this.pat.id;

  }
editPatient() {
  this.sd.activeTabIndex = 5;
}
// getFile() {

//   const storageRef = firebase.storage();
//     // Create a reference to the file we want to download
//   const starsRef = storageRef.ref('files/IMG_4612.jpg');
//     // Get the download URL
//     starsRef.getDownloadURL().then(url =>  {
//       //console.log(url);
//       const xhr = new XMLHttpRequest();
//       xhr.responseType = 'blob';
//       xhr.onload = function (event) {
//         const blob = xhr.response;
//         //console.log(blob);
//         saveAs(blob, '123.pdf');
//       };
//       xhr.open('GET', url);
//       xhr.send();
//     }).catch(error => {
//       //console.log(error.code);
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

deletePatient() {
  this.db.deletePatient(this.pat.id);
  this.sd.routeTo('/home');
}

  printPatientDetails() {
  //   @todo
  }

//   myUploader(event) {
//     const storegRef = firebase.storage().ref();
//    for (const file of event.files) {
//      this.uploadedFiles.push(file);
//      const date = new Date();
//      const fileName = '' + file.name + '_' + date;
//      const path = `/${this.Pid}/${fileName}`;
//       const iRef = storegRef.child(path);
//       iRef.put(file).then((snapshot) => {
//         //console.log(snapshot);
//       const Pfile = {
//         Pid: this.Pid,
//         fileName: file.name,
//         date: date
//       };
//       this.db.patientsFileRef.add(Pfile);
//       //console.log(file);
//       this.sd.createAlert('success', 'קובץ התוסף בהצלחה', '');
//       }).catch(error => {
//         //console.log(error);
//       });
//     }
// }



generatePdf() {
  
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
      const fileName = 'פרטי תלמיד-' + this.pat.firstName + ' ' + this.pat.lastName + '.pdf';

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
