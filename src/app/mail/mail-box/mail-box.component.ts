import { Component, OnInit, Input } from '@angular/core';
import { DbService, MassageForUser } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import * as fb from 'firebase';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
/* 
massages are:
--user--
1. massage user write for himself --- colloetion users/{USERNAME}/massages/
2. massage about grades of his pats -function create massage and saved in?  --- colloetion
3. duedate of payer in group or plan treat he his  -function create when entered or update dueDate massage and saved in --- colloetion users/{USERNAME}/massages/
--admin--
1. speciel days massages  --- colloetion setting/admin/specielMassages/
2. duedates of payer in group or plan treat -function create when entered or update dueDate massage and saved in --- colloetion setting/admin/massages/
3. made plans for pats that have mipuy -function create when entered new mipuy - when do plan- remove massage- and saved in --- colloetion setting/admin/massages/   ----id mipuyID(doc name)
*/
export class MailBoxComponent implements OnInit {
  @Input() status: string;
  thisYear;
  thisMonth;
  thisDay;
  thisHour;
  time;
  userList = [];
  adminList = [];
  allList: any[] = [];
  massageToDelete: MassageForUser;

  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {

    this.allMassagesForUser();
    if (!this.status) {
      this.sd.routeTo('home');
    }
    this.time = new Date();
    const date = new Date();
    this.thisYear = date.getFullYear();
    this.thisMonth = date.getMonth() + 1;
    this.thisDay = date.getDate();
    this.thisHour = date.getHours();
    if (this.db.userNow.isAdmin) {
      this.getAdminMails();
    }
    this.getAllUserMails();

  }



  async getAllUserMails() {
    this.db.getUserMassagesRef(this.db.userNow.mail).valueChanges().subscribe(M => {
      this.userList = M;
      this.allList = this.adminList.concat(this.userList);

      console.log(this.userList);
      this.allList.sort((a, b) =>  b.time.toDate().getTime() - a.time.toDate().getTime());

    });

  }


  getAdminMails() {
    /*
    1. speciel days massages  --- colloetion setting/admin/specielMassages/
    2. duedates of payer in group or plan treat -function create when entered or update dueDate massage and saved in 
    --- colloetion setting/admin/massages/
    3. made plans for pats that have mipuy -function create when entered new mipuy - when do plan- remove massage- and saved in 
    --- colloetion setting/admin/massages/   ----id mipuyID(doc name)
    */
    this.db.getAdminMassagesRef().valueChanges().subscribe(M => {
      this.adminList = M;
      this.allList = this.userList.concat(this.adminList);
      this.allList.sort((a, b) =>  b.time.toDate().getTime() - a.time.toDate().getTime());

    });

  }
  deleteMail() {
    console.log(this.massageToDelete.status);
    console.log(this.massageToDelete);
    switch (this.massageToDelete.status) {
      case 'users':
        this.db.deleteUserMassage(this.massageToDelete.insertBy + this.massageToDelete.insertTime);
        break;
      case 'every_year':
        {
          // update next year
          const date = new Date(this.massageToDelete.time);
          console.log(date);
          date.setFullYear(date.getFullYear() + 1);
          console.log(date);

          this.massageToDelete.year = date.getFullYear();
          this.massageToDelete.time = date;
          console.log(this.massageToDelete);

          this.db.updateAdminMassage(this.massageToDelete.insertBy + this.massageToDelete.insertTime, this.massageToDelete);
          break;
        }
      case 'planForMipuy':
        this.sd.createAlert('info', 'ניתן לבטל הודעה זו רק ביצירת תכנון טיפול לתלמיד', '');
        break;
      case 'dueDate':
        this.db.deleteAdminMassage(this.massageToDelete.insertBy + this.massageToDelete.insertTime);
        break;
      default:
        break;
    }

  }

  getDate(timestmp) {
    return new Date(timestmp);
  }

  async allMassagesForUser() {
    const f = fb.firestore();
    const admin = await f.collection('setting').doc('admin').collection('massages').get();
    console.log(admin);
  }
  routeToPatCard(msg) {
    console.log(msg);
    if(msg.status == 'planForMipuy') {
      const msgParts = msg.massage.split('לתלמיד בעל מ.ז : ')[1];
      const Pid = msgParts.split(' עודכן')[0];
      this.sd.routeTo('Pcard', Pid);
    }
  }
}
