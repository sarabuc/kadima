import { Component, OnInit } from '@angular/core';
import { DbService, Patient, Mipuy } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { saveAs } from 'file-saver/FileSaver';
@Component({
  selector: 'app-new-plan-for-patient',
  templateUrl: './new-plan-for-patient.component.html',
  styleUrls: ['./new-plan-for-patient.component.css']
})
export class NewPlanForPatientComponent implements OnInit {
pat: Patient;
Pid;
status;
// flags for all part
whoPayF = true;
parentsConfirmF = true;
haveDoeDateF = false;
dueDateF = false;
amountConfirmLessonsF = true;
wantWarningF = false;
choozeMipuyF = false;
addFilesF = false;

// ngModel for all inputs
whoPay;
parentsConfirm;
haveDoeDate = false;
dueDate;
history;
amountConfirmLessons;
wantWarning = false;
addFiles = false;

// any more
optionsForParentConfirm;
mipuyDates = []; // to chooze mipuy from all
selectedDate;
showListMipuy_V = false;
  showMipuy_V = false;
chooesedMipuy: any;

// third step
  helpPlanning = false;
  diffiForPlan = [];
  methodsForDiff = [];
  therapistsForMethod = [];

  allTherapists = [];
  allMethods = [];

// last step
uploadedFiles: any[] = [];

  constructor(public sd: ShareDataService, public db: DbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.Pid = this.route.snapshot.params['id'];
    if (!this.Pid) {
      this.router.navigate(['/home']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');

    } else {
      this.getPatientByID();
      this.init();
    }
  }


  getPatientByID() {

    this.db.allPatientsRef.doc<Patient>('' + this.Pid).valueChanges().subscribe(P => {
      this.pat = P;

    });
  }

  finishPlan() {




    // ...
    this.sd.routeTo('/Pcard', this.Pid);
  }

  init() {
this.optionsForParentConfirm = ['יש אישור', 'אין אישור', 'לא נבדק עדין'];
    this.db.getMipuyForPatient(this.Pid).subscribe(M => {
      this.mipuyDates = M;
      console.log(M);
    });

    this.db.getAllTherapistsRef().valueChanges().subscribe(thera => this.allTherapists = thera);
    this.db.getAllMethodsRef().valueChanges().subscribe(methods => this.allMethods = methods);
  }
  initDiffiForPlan() {
    this.diffiForPlan = [];
    Object.keys(this.chooesedMipuy).forEach(dif => {
      if (dif !== 'mipuyDate') {
        const ob = {
          Dcode: dif,
          value: 'no',
          method: '',
          therapist: ''
        };
        this.diffiForPlan.push(ob);
      }
    });
  }
  showListOfMipuy() {
    this.showListMipuy_V = true;
    console.log('in show list mipuy- in plan');

  }

  showLastMipuy() {
    this.showMipuy_V = true;
this.getOneMipuyForPat(this.mipuyDates[0].mipuyDate) ;
  }

  getOneMipuyForPat(selectedDate) {
    this.showListMipuy_V = false;
    this.chooesedMipuy = undefined;
    console.log('get mipuy');
    const mipuyForPatient = firebase.functions().httpsCallable('getOneMipuyByDateAndId');
    mipuyForPatient({ text: '' + this.Pid + '_' + selectedDate }).then(res => {
      console.log(res);
      this.chooesedMipuy = res.data;
      this.initDiffiForPlan();
    }).catch(err => {
      this.chooesedMipuy = 'no internet';
      console.log(err);
    });
  }

  showOneMipuy( d: Mipuy) {
    this.showMipuy_V = true;
    this.getOneMipuyForPat(d.mipuyDate);
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


  myUploader(event) {
    const storegRef = firebase.storage().ref();
   for (const file of event.files) {
     this.uploadedFiles.push(file);
     const date = new Date();
     const fileName = '' + file.name + '_' + date;
     const path = `/${this.Pid}/${fileName}`;
      const iRef = storegRef.child(path);
      iRef.put(file).then((snapshot) => {
        console.log(snapshot);
      const Pfile = {
        Pid: this.Pid,
        fileName: file.name,
        date: date
      };
      this.db.patientsFileRef.add(Pfile);
      console.log(file);
      this.sd.createAlert('success', 'קובץ התוסף בהצלחה', '');
      }).catch(error => {
        console.log(error);
      });
    }
}


  updatediffiForPlan(event) {
   this.diffiForPlan.forEach(dif => {
    dif.value = event[dif.Dcode];
   });
   console.log(this.diffiForPlan);
  }
}
