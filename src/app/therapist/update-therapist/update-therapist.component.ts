import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { Therapist, DbService } from '../../services/db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-therapist',
  templateUrl: './update-therapist.component.html',
  styleUrls: ['./update-therapist.component.scss']
})
export class UpdateTherapistComponent implements OnInit {
   Tid: string;
  @Input() th: Therapist; /*= {
    id: '',
    firstName: '',
    lastName: '',
    phone1: '',
    phone2: '',
    address: '',
    mail: '',
    strFreeTime: this.sd.FREE_ALL_TIME
  };*/
  /*firstName: string;
  lastName: string;
  phone1: string;
  phone2: string;
  address: string;
  priceForLesson: number;
  freeTime: string;
  userName: string;
  mail: string;
  strFreeTime: string;*/
  showMoreOptions = false;
  Tstatus = 'update';
  
  constructor(public sd: ShareDataService, public db: DbService, private router: Router) {
    
  }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }

    // init
    console.log(this.th);
    this.Tid = this.th.id;
   // this.getTherapistByID(this.Tid);
  }

  cleanForm() {
    
    this.th.firstName = '';
    this.th.lastName = '';
    this.th.mail = '';
    this.th.phone1 = '';
    this.th.phone2 = '';
    this.th.address = '';
    this.th.skill = '';

  }
  updateTherapist() {
    this.db.updateTherapist(this.th);
   this.sd.activeTabIndex = 0;
  }

  getTherapistByID(id) {
this.db.isBusy = true;
this.db.allTherapistsRef.doc<Therapist>('' + id).valueChanges().subscribe(therapist => {
this.th = therapist;
this.db.isBusy = false;
console.log(this.th);
});
  }

}
