import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

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
allList: any[] = [];
massageToDelete;

  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    if (!this.status) {
      this.sd.routeTo('home');
    } 
    this.time = new Date();
    const date = new Date();
    this.thisYear = date.getFullYear()
    this.thisMonth = date.getMonth() + 1;
    this.thisDay = date.getDate();
    this.thisHour = date.getHours();
     if (this.db.userNow.isAdmin) {
       this.getAdminMails();
    } 
       this.getAllUserMails();

  }

  

  async getAllUserMails() {
    this.db.getUserMassagesRef(this.db.userNow.userName).valueChanges().subscribe(M => {
    console.log(M);
      this.allList = this.allList.concat(M);
      const set = new Set(this.allList);
      this.allList  = Array.from(set);
      this.allList.sort((a, b) => a.time.localeCompare(b.time));
    });
  
  }


  getAdminMails() {
/*
1. speciel days massages  --- colloetion setting/admin/specielMassages/
2. duedates of payer in group or plan treat -function create when entered or update dueDate massage and saved in --- colloetion setting/admin/massages/
3. made plans for pats that have mipuy -function create when entered new mipuy - when do plan- remove massage- and saved in --- colloetion setting/admin/massages/   ----id mipuyID(doc name)
*/
    this.db.getAdminMassagesRef().valueChanges().subscribe(M => {
      console.log(M);
      this.allList = this.allList.concat(M);
      const set = new Set(this.allList);
      this.allList = Array.from(set);
      this.allList.sort((a, b) => a.time.localeCompare(b.time));

    });

  }
  deleteMassage() {

  }
}
