import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-add-therapist-from-exel',
  templateUrl: './add-therapist-from-exel.component.html',
  styleUrls: ['./add-therapist-from-exel.component.scss']
})
export class AddTherapistFromExelComponent implements OnInit {

  constructor(private db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }

}
