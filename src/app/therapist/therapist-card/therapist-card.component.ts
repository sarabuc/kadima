import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Therapist, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'app-therapist-card',
  templateUrl: './therapist-card.component.html',
  styleUrls: ['./therapist-card.component.scss']
})
export class TherapistCardComponent implements OnInit {
  readData: boolean;
  Tid: string;
  thera: Therapist;


  constructor(private router: Router, private route: ActivatedRoute, public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    this.Tid = this.route.snapshot.params['id'];
    if (!this.Tid) {
      this.router.navigate(['/home']);
      this.sd.createAlert('error', 'שגיאה בהעברת נתונים, נא נסה שוב', '');
    }
    this.getTherapistByID();
    this.sd.activeTabIndex = 0;

  }


  getTherapistByID() {
    // get one therapist by id:
    this.readData = true;
    const TDoc = this.db.allTherapistsRef.doc<Therapist>('' + this.Tid).valueChanges().subscribe(T => {
      this.thera = T;
      // //console.log(T);
      this.readData = false;
    });

  }


}





