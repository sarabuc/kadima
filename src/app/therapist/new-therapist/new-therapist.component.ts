import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { Therapist, DbService } from '../../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-therapist',
  templateUrl: './new-therapist.component.html',
  styleUrls: ['./new-therapist.component.scss']
})
export class NewTherapistComponent implements OnInit {
  Tid: string;
  firstName: string;
  lastName: string;
  phone1: string;
  phone2: string;
  address: string;
  priceForLesson: number;
  freeTime: string;
  userName: string;
  mail: string;
  skill: string;

  showMoreOptions = false;
  Tstatus = 'new';

  constructor(public sd: ShareDataService, public db: DbService ,private router: Router) {
    /*this.sd.TPstatusForTime = 'newT';
    this.sd.TPidForTime = '0000';
    this.sd.idForDiffiAndMeth = '0000';
    this.sd.statusForDiffiAndMeth = 'newT';*/

    
   }

  ngOnInit() {
    // init
    this.Tid = '';
    this.firstName = '';
    this.lastName = '';
    this.mail = '';
    this.phone1 = '';
    this.phone2 = '';
    this.address = '';
    this.skill = '';
  }

  cleanForm() {
    this.Tid = '';
    this.firstName = '';
    this.lastName = '';
    this.mail = '';
    this.phone1 = '';
    this.phone2 = '';
    this.address = '';
    this.skill = '';

  }
  saveNewTherapist() {
    let thera: Therapist;
    
    thera = {
      id: this.Tid,
      firstName: this.firstName,
      lastName: this.lastName,
      phone1: this.phone1,
      phone2: this.phone2,
      address: this.address,
      mail: this.mail,
      skill: 'מטפל',
      experienceYears: 0,
      experienceBefore: '',
      dergee: '',
      kind: '',
      comment: '',
      strFreeTime: this.sd.FREE_ALL_TIME
      };

    this.db.addTherapist(thera);
    
    this.router.navigate(['/']);
  }

  isTherapistExist() {
    return this.db.isTherapistExist(this.Tid);
  }


}
