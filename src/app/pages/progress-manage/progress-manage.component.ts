import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-progress-manage',
  templateUrl: './progress-manage.component.html',
  styleUrls: ['./progress-manage.component.css']
})
export class ProgressManageComponent implements OnInit {
Pid: string;
allGrades;
mapedAllGrades;
  optionsForGrades;
allMipuy;
groupInfo;
treatInfo;
  constructor(public db: DbService, public sd: ShareDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    this.Pid = this.route.snapshot.params['id'];
    if (!this.Pid) {
      this.sd.routeTo('home');
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
    }
    this.getGradesForPat();
  }

  getGradesForPat() {
    this.db.getGradesForPidRef(this.Pid).valueChanges().subscribe(grades => {
      this.allGrades = grades;
      console.log(this.allGrades);
      this.allGrades.sort((a, b) => {
        if (a.Dcode.localeCompare(b.Dcode) !== 0) {
          return a.Dcode.localeCompare(b.Dcode);
        } else {
          return a.testDate.localeCompare(b.testDate);
        }
      });
       this.mapedAllGrades = this.groupByArea(this.allGrades, 'Dcode');
      this.allGrades = [];
      this.optionsForGrades = [];
       for (const key of Object.keys(this.mapedAllGrades)) {
         const tempData = this.mapedAllGrades[key];
         this.mapedAllGrades[key] = {};
         this.mapedAllGrades[key]['labels'] = tempData.map(G => G.testDate);
        this.mapedAllGrades[key]['datasets'] = [];
         this.mapedAllGrades[key]['datasets'][0] = {
          label: key,
           fill: false,
           borderColor: '#4bc0c0',
           data: tempData.map(G => G.grade)
         };
         this.allGrades.push(this.mapedAllGrades[key]);
         this.optionsForGrades.push({
           title: {
             display: true,
             text: key,
             fontSize: 16
           }
          });
       }
      console.log(this.mapedAllGrades);
    });
  }
   groupByArea(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc; // .map(G => ({area: G.Dcode, grade: G.grade, date: G.testDate, comment: G.comment}));
  }, {});
}

  getMipuysForPat() {
    this.allMipuy = undefined;
    console.log('get mipuy');
    const mipuyForPatient = firebase.functions().httpsCallable('getMipuysForPatientBySecondAreas');
    mipuyForPatient({ text: this.Pid }).then(res => {
      console.log(res);
      // for (const mipuy of res.data) {
      //   mipuy.mipuyDate = this.sd.converrSecondsToDateTime(mipuy.mipuyDate._seconds);
      // }
      this.allMipuy = res.data;
      console.log(this.allMipuy);
    }).catch(err => {
      this.allMipuy = 'no internet';
      console.log(err);
    });
  }
  getProgressForPat() {
 this.db.getGroupTreatInfoRef(this.Pid).valueChanges() .subscribe(info => {
   this.groupInfo = info;
 });
    this.db.getTreatInfoRef(this.Pid).valueChanges().subscribe(info => {
      this.treatInfo = info;
    });
  }
}
