import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as firebase from 'firebase';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-report-by-therapist',
  templateUrl: './report-by-therapist.component.html',
  styleUrls: ['./report-by-therapist.component.css']
})
export class ReportByTherapistComponent implements OnInit {
  createBy;
  createTime;
  Tid;
  allTherapistList;
  getAllTherapist = false;
  groupsForTherapist;
  patForTherapist;
  selectedGroup;
  selectedPat;
  getAllGroups = false;
  getAllPats = false;
  groupOrPat;
  allGropsInDb: any[];
  allTreatForGroupInDb: any[];

  reportData = [];
  DB: firebase.firestore.Firestore;

  therapists = [];
  groups = [];
  pats = [];
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    this.createBy = this.db.userNow.name;
    this.createTime = this.sd.convertDateToStringDD_MM_YYYY(new Date());
    this.db.isBusy = true;
    try {
    this.Tid = this.sd.selectedTidForRport;
    this.selectedGroup = this.sd.selectedGroupForReport;
    this.selectedPat = this.sd.selectedPatForReport;
    this.getAllGroups = this.sd.allGroupFForReport;
    this.getAllPats = this.sd.allPatientFForReport;
    this.getAllTherapist = this.sd.allTherapistFForReport;
    this.groupOrPat = this.sd.groupOrPatForReport;
    this.groupsForTherapist = this.sd.allGroupsForTherapistForReport;
    this.patForTherapist = this.sd.allPatsFotTherapistForReport;
    
    this.DB = firebase.firestore();
    this.getTherapists();
    } catch (err) {
      this.db.isBusy = false;
this.sd.createAlert('error', 'שגיאה, נסה שוב', '');
    }
  }

  async getTherapists() {
    if (this.getAllGroups && this.getAllTherapist) {
     const allGropsInDb = await this.DB.collection('groups').get();
      this.allGropsInDb = allGropsInDb.docs;
      const alltreatForGroup = await this.DB.collection('groups').get();
      this.allTreatForGroupInDb = alltreatForGroup.docs;
    }
  if (this.getAllTherapist) {
    this.getAllTherapistFromDb();
  } else if (this.Tid) {
    this.getOneTherapistFromDb();
  } else {
    this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נסה שוב', '');
    this.db.isBusy = false;
    return;
  }
}


  async getAllTherapistFromDb() {
    const Tlist = await this.DB.collection('therapist').get();
    for (const T of Tlist.docs) {
      const Tdata = {};
      Tdata['Tid'] = T.data().id;
      Tdata['name'] = T.data().firstName + ' ' + T.data().lastName;
      Tdata['skill'] = T.data().skill;
      const index = this.reportData.length;
      this.reportData.push(Tdata);
      if (this.groupOrPat === 'group') {
      this.getGroupsForT(T.data().id, index);
      } else if (this.groupOrPat === 'pat') {
      this.getPatsForT(T.data().id, index);
      }
    }
    // this.therapists =  list.docs.map(element =>  {
    //   return element.data();
    // });
  }

  async getOneTherapistFromDb() {
    const T = await this.DB.collection('therapist').doc('' + this.Tid).get();
    const Tdata = {};
    Tdata['Tid'] = T.data().id;
    Tdata['name'] = T.data().firstName + ' ' + T.data().lastName;
    Tdata['skill'] = T.data().skill;
    const index = this.reportData.length;
    this.reportData.push(Tdata);
    if (this.groupOrPat === 'group') {
      this.getGroupsForT(T.data().id, index);
    } else if (this.groupOrPat === 'pat') {
      this.getPatsForT(T.data().id, index);
    }
  }

  async getGroupsForT(Tid, index) {
      let groupsArr = [];
      if (this.getAllGroups && this.getAllTherapist) {
        groupsArr = this.allGropsInDb.filter(G => G.data().Tid === Tid).map(G => G.data());
      } else if (this.getAllGroups && !this.getAllTherapist) {
        groupsArr = this.groupsForTherapist;
      } else if (!this.getAllTherapist && !this.getAllGroups) {
        groupsArr.push(this.selectedGroup);
      } else {
        throw new Error('groups for T');
      }

      if (this.reportData[index].Tid === Tid) {
        this.reportData[index]['groups'] = groupsArr.map((G, groupIndex) => {
        
         this.getTreatForGroup(G.groupCode, index, groupIndex)
        return {name: G.groupName, grade1: G.grade1, grade2: G.grade2, area: G.area};
        });
         //console.log(this.reportData);
         
        this.db.isBusy = false;

         } else {
          //console.error('index dont work');
          this.db.isBusy = false;
        }


  }
 async getTreatForGroup(groupCode, index, groupIndex) {
    const tempList = await this.DB.collection('groupTreatmentInfo').where('groupCode', '==', groupCode).get();
    //console.log(tempList.docs.map(T => T.data()));
    const list =  tempList.docs.map(T => ({date: T.data().date,
                                time: '' + T.data().startTime + '-' + T.data().endTime, 
                                hours: T.data().hours, 
                                subject: T.data().subject,
                                method: T.data().method,
                                comment: T.data().comment}));
    //console.log(list);
    this.reportData[index]['groups'][groupIndex]['treats'] = list;
  }
  async getPatsForT(Tid, index) {
    //console.log('in get pat');
    let patsArr = [];
    if ( this.getAllTherapist) {
      const patsArrTemp = await this.DB.collection('therapist').doc(Tid).collection('patient').get();
      patsArr = patsArrTemp.docs.map(P => P.data());
    } else if (this.getAllPats && !this.getAllTherapist) {
      patsArr = this.patForTherapist;
          //console.log(patsArr);

    } else if (!this.getAllTherapist && !this.getAllPats) {
      patsArr.push(this.selectedPat);
                //console.log(patsArr);

    } else {
      throw new Error('pats for T');
    }
    
    if (this.reportData[index].Tid === Tid) {
      this.reportData[index]['pats'] = [];
        for(let i = 0; i<patsArr.length; i++) {
          this.getPatTreats(patsArr[i].Pid, Tid, index, i);
        }
          
       
      //console.log('get here')
      //console.log(this.reportData);
          this.db.isBusy = false;
    } else {
      //console.error('index dont work');
          this.db.isBusy = false;
    }

  }

  
  
  
  async getPatTreats(Pid, Tid, index, patIndex) {
     const patT = await this.DB.collection('patients').doc('' + Pid).get();
        const treatsForP = await this.DB.collection('treatmentInfo').where('Pid', '==', Pid).where('Tid', '==', Tid).get();
    
        // this.reportData[index]['pats'][patIndex]['name'] =  pat.data().firstName + ' ' + pat.data().lastName;
        //  this.reportData[index]['pats'][patIndex]['grade'] =  pat.data().grade;
     
        // this.reportData[index]['pats'][patIndex]['treats'] =  treatsForP.docs.map(T => ({ area: T.data().area,
        //                                       treatDate: T.data().treatDate,
        //                                       time: '' + T.data().startTime + '-' + T.data().endTime, 
        //                                       description: T.data().description,
        //                                       hours: T.data().hours,
        //                                       comment: T.data().comment}));
        const pat = {};
        pat['name'] =  patT.data().firstName + ' ' + patT.data().lastName;
        pat['grade'] =  patT.data().grade;
        pat['treats'] =  treatsForP.docs.map(T => ({ area: T.data().area,
                                              treatDate: T.data().treatDate,
                                              time: '' + T.data().startTime + '-' + T.data().endTime, 
                                              description: T.data().description,
                                              hours: T.data().hours,
                                              comment: T.data().comment}));
            this.reportData[index]['pats'].push(pat);                                  

    
  }




  
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
