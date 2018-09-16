import { Component, OnInit, Input } from '@angular/core';
import { Patient, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  @Input() pat: Patient;
  @Input() Pid: string;
  uploadedFiles: any[] = [];
  constructor(public db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
    this.Pid = this.pat.id;
  }
editPatient() {
  this.sd.activeTabIndex = 1;
}

deletePatient() {
  this.db.deletePatient(this.pat.id);
  this.sd.routeTo('/home');
}


  myUploader(event) {
    const storegRef = firebase.storage().ref();
   for (const file of event.files) {
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
      });
    }
}
}
