import { Component, OnInit, Input } from '@angular/core';
import { Therapist, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-therapist-profile',
  templateUrl: './therapist-profile.component.html',
  styleUrls: ['./therapist-profile.component.scss']
})
export class TherapistProfileComponent implements OnInit {

  @Input() thera: Therapist;

  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }

  editTherapist() {
    this.sd.activeTabIndex = 1;
  }

  deleteTherapist() {
    this.db.deletePatient(this.thera.id);
    this.sd.routeTo('/home');
  }

}
