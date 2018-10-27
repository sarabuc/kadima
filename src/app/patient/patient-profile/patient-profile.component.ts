import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
import { saveAs } from 'file-saver/FileSaver';
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
  this.sd.activeTabIndex = 1;
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
//         console.log(snapshot);
//       const Pfile = {
//         Pid: this.Pid,
//         fileName: file.name,
//         date: date
//       };
//       this.db.patientsFileRef.add(Pfile);
//       console.log(file);
//       this.sd.createAlert('success', 'קובץ התוסף בהצלחה', '');
//       }).catch(error => {
//         console.log(error);
//       });
//     }
// }
}
