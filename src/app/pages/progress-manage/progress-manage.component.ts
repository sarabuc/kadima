import { Component, OnInit } from '@angular/core';
import { DbService, GroupTreatmentInfo } from '../../services/db.service';
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
optionForMipuy = [];
groupInfo;
mapedGroupInfo;
  optionsForGroupInfo = [];
treatInfo;
mapedTreatInfo;
  optionsForTreatInfo = [];

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
    this.getProgressForPat();
  }

  getGradesForPat() {
    this.db.getGradesForPidRef(this.Pid).valueChanges().subscribe(grades => {
      this.allGrades = grades;
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
         console.log(this.allGrades);
         this.optionsForGrades.push({
           title: {
             display: true,
             text: key,
             fontSize: 16
           }
          });
       }
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
    // this.allMipuy = undefined;
    // //console.log('get mipuy');
    // const mipuyForPatient = firebase.functions().httpsCallable('getMipuysForPatientBySecondAreas');
    // mipuyForPatient({ text: this.Pid }).then(res => {
    //   //console.log(res);
    //   // for (const mipuy of res.data) {
    //   //   mipuy.mipuyDate = this.sd.converrSecondsToDateTime(mipuy.mipuyDate._seconds);
    //   // }
    //   this.allMipuy = res.data;
    //   //console.log(this.allMipuy);
    // }).catch(err => {
    //   this.allMipuy = 'no internet';
    //   //console.log(err);
    // });
  }
  async getProgressForPat() {
    this.db.getGroupTreatInfoForProgressRef(this.Pid).valueChanges().subscribe(async(info) => {
            //console.log(info);

     // info = info.filter(i => i.progress < 0);
      info = info.sort((a, b) => {
     
       const d1 = a.date.split('.');
        const d2 = b.date.split('.');
    
          if(d1[2] !== d2[2]) {
            return +d1[2] - +d2[2];
          }
          if(d1[1] !== d2[1]) {
            return +d1[1] - +d2[1];
          }
          return +d1[0] - +d2[0];


      });
      //console.log(info);
   this.groupInfo = info.map(inf => {
     return {
      comment: inf[this.Pid].comment,
      progress: inf[this.Pid].progress,
      area: inf.subject,
      date: inf.date, 
      groupCode: inf.groupCode
     };
   });
       this.mapedGroupInfo = this.groupByArea(this.groupInfo, 'groupCode');
       this.groupInfo = [];
       this.optionsForGroupInfo = [];
       for (const key of Object.keys(this.mapedGroupInfo)) {// all groups
         const tempData = this.mapedGroupInfo[key];
         const label = await this.getGroupNameAndAreaByCode(key);
         this.mapedGroupInfo[key] = {};
         this.mapedGroupInfo[key]['labels'] = tempData.map(T => T.date);
         this.mapedGroupInfo[key]['datasets'] = [];
         this.mapedGroupInfo[key]['datasets'][0] = {
           label:  label,
           fill: false,
           borderColor: '#4bc0c0',
           data: tempData.map(G => G.progress)
         };

         this.groupInfo.push(this.mapedGroupInfo[key]);
            //console.log(this.groupInfo);

        this.optionsForGroupInfo.push({
          title: {
            display: true,
            text: label,
            fontSize: 16
          }
        });
       }
       //console.log(this.mapedGroupInfo);
 });


    this.db.getTreatInfoRef(this.Pid).valueChanges().subscribe(info => {
        //info = info.filter(i => i.progress < 0);
      info = info.sort((a, b) => {
       
       const d1 = a.treatDate.split('.');
        const d2 = b.treatDate.split('.');
        
          if(d1[2] !== d2[2]) {
            return +d1[2] - +d2[2];
          }
          if(d1[1] !== d2[1]) {
            return +d1[1] - +d2[1];
          }
          return +d1[0] - +d2[0];

      });
      this.treatInfo = info;//.filter(T => T.progress > 0);
      this.mapedTreatInfo = this.groupByArea(this.treatInfo, 'area');
      this.treatInfo = [];
      this.optionsForTreatInfo = [];
      for (const key of Object.keys(this.mapedTreatInfo)) {
        const tempData = this.mapedTreatInfo[key];
        this.mapedTreatInfo[key] = {};
        this.mapedTreatInfo[key]['labels'] = tempData.map(T => T.treatDate);
        this.mapedTreatInfo[key]['datasets'] = [];
        this.mapedTreatInfo[key]['datasets'][0] = {
          label: key,
          fill: false,
          borderColor: '#4bc0c0',
          data: tempData.map(T => T.progress)
        };
        this.treatInfo.push(this.mapedTreatInfo[key]);
        this.optionsForTreatInfo.push({
          title: {
            display: true,
            text: key,
            fontSize: 16
          }
        });
      }
      //console.log(this.mapedTreatInfo);
    });
  }


 async getGroupNameAndAreaByCode( groupCode) {
   //console.log(groupCode);
  const group =  await this.db.DB.collection('groups').doc(groupCode).get();
  //console.log(this.groupInfo);
 return group.data().groupName + '- ' + group.data().area;
  
  }
  // async getGroupNameAndAreaByCode(indexG, indexOption, groupCode) {
  // const group =  await this.db.DB.collection('groups').doc(groupCode).get();
  // //console.log(this.groupInfo);
  // const name = group.data().groupName + '- ' + group.data().area;
  // this.groupInfo[indexG]['datasets'][0]['label'] = name;
  // this.optionsForGroupInfo[indexOption]['title']['text'] = name;
  // //console.log(this.groupInfo);
  // }
}
