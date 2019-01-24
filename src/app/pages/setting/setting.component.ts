import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
// declare var jquery: any;
// declare var $: any;
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  sortOptions: any[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  allUsers = [];
  newUser;
  newMsg;
  allMsgs = [];
  massageToDelete;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow) || (!this.db.userNow.isAdmin)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    this.db.allUsersRef.valueChanges().subscribe(users => {
      this.allUsers = users;
    });
    this.db.getAdminMassagesEveryYearRef().valueChanges().subscribe(M => {
      // this.db.deleteAdminMassage((M[0] as any).insertBy + (M[0] as any).insertTime.toDate());
      //console.log(M);
      this.db.getAdminMassagesRef().valueChanges().subscribe(M2 => {
        this.allMsgs = M.concat(M2)
        this.allMsgs.sort((a, b) =>  b.time.toDate().getTime() - a.time.toDate().getTime());
      });
      
    });
    this.sortOptions = [
      { label: ' לפי שם', value: 'name' },
      { label: ' לפי שם משתמש', value: 'userName' },
      { label: 'לפי מייל', value: 'mail' },

    ];
    this.newUser = {
      name: null,
      mail: null,
      password: null,
      resentPass: null,
      id: null
    };
    this.newMsg = {
      date: null,
      hour: null,
      massage: null,
      comment: null
    };
  }
  //   //console.log('setting');
  //   const navItems = $('.admin-menu li > a');
  //   const navListItems = $('.admin-menu li');
  //   const allWells = $('.admin-content');
  //   const allWellsExceptFirst = $('.admin-content:not(:first)');
  //   allWellsExceptFirst.hide();
  //   navItems.click(function (e) {
  //     e.preventDefault();
  //     navListItems.removeClass('active');
  //     $(this).closest('li').addClass('active');
  //     allWells.hide();
  //     const target = $(this).attr('data-target-id');
  //     $('#' + target).show();
  //   });
  // }
  onSortChange(event) {
    const value = event.value;
    this.sortOrder = 1;
    this.sortField = value;

  }
  saveNewUser() {
    //this.newUser['mail'] = this.newUser['userName'];
    for (const key of Object.keys(this.newUser)) {

      if (!this.newUser[key]) {
        this.sd.createAlert('error', 'חסרים פרטים, תקן ונסה שוב', '');
        return;
      }
    }
      if (this.newUser.password !== this.newUser.resentPass) {
        this.sd.createAlert('error', 'סיסמא לא תואמת בשתי ההכנסות', '');
        return;
      }
      const findExist = this.allUsers.find(U => U.mail === this.newUser.mail);
      if (findExist) {
        this.sd.createAlert('error', 'משתמש עם מייל זה כבר מופיע', '');
        return;
      }
      this.newUser['isAdmin'] = false;
      this.newUser['insertBy'] = this.db.userNow.mail;
      this.newUser['insertTime'] = '' + new Date();
      delete this.newUser.resentPass;
      //console.log(this.newUser);
      this.db.addUser(this.newUser);
      this.newUser = {
        name: null,
        id: null,
        mail: null,
        password: null,
        resentPass: null
      };
    
  }
  saveNewMsg(date, hour) {
    //console.log(date);
    //console.log(hour);
    if (!this.newMsg.massage || !this.newMsg.date || !this.newMsg.hour) {
      this.sd.createAlert('error', 'שגיאה, בדוק את כל השדות ונסה שוב', '');
      return;
    }
    if (!this.sd.hourRegex.test(this.newMsg.hour)) {
      this.sd.createAlert('error', 'שעה  לא תקנית', '');
      return;
    }
    if (!this.sd.dateRegex.test(this.newMsg.date)) {
      this.newMsg.date = this.sd.convertDateToStringDD_MM_YYYY(this.newMsg.date);
      if (!this.sd.dateRegex.test(this.newMsg.date)) {
        this.sd.createAlert('error', 'תאריך  לא תקני', '');
        return;
      }
    }
    const date1 = new Date(this.newMsg.date);
    this.newMsg['hour'] = this.newMsg['hour'].split(':')[0];
    date1.setHours(this.newMsg['hour']);
    this.newMsg['time'] = date1;
    this.newMsg['status'] = 'every_year';
    this.newMsg['userId'] = 'admin';
    this.newMsg['insertBy'] = this.db.userNow.mail;
    this.newMsg['insertTime'] = '' + new Date();
    const massageId = this.newMsg['insertBy'] + this.newMsg['insertTime'];
    this.db.updateAdminMassage(massageId, this.newMsg);
    this.sd.createAlert('success', 'הודעה שנתית נוספה בהצלחה', '');
  }




  deleteMail() {
    console.log(this.massageToDelete.status);
    console.log(this.massageToDelete);
    switch (this.massageToDelete.status) {

      case 'every_year':
        this.db.deleteAdminMassage(this.massageToDelete.insertBy + (this.massageToDelete.insertTime as any).toDate);
        break;
      case 'planForMipuy':
      this.db.deleteAdminMassage(this.massageToDelete.docId);
      break;

      default:
        break;
    }

  }
  routeToPatCard(msg) {
    //console.log(msg);
    if(msg.status == 'planForMipuy') {
      const msgParts = msg.massage.split('לתלמיד בעל מ.ז : ')[1];
      const Pid = msgParts.split(' עודכן')[0];
      this.sd.routeTo('Pcard', Pid);
    }
  }

}
