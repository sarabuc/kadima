import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../services/share-data.service';
import { Therapist, DbService } from '../../services/db.service';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {
fname = '';
lname = '';
allT: Therapist[];
  constructor(public sd: ShareDataService, public db: DbService) { }

  ngOnInit() {
    this.getAllT();
  }
  isFnPrefix(fn) {
    const filter = this.fname.toUpperCase();
    return (fn.toUpperCase().indexOf(filter) > -1);
  }
  isLnPrefix(ln) {
    const filter = this.lname.toUpperCase();
    return (ln.toUpperCase().indexOf(filter) > -1);
  }

  getAllT() {
    this.db.allTherapistsRef.valueChanges().subscribe(theras => {
      this.allT = theras;
    });
  }
}
