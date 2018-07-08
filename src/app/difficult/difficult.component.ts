import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Difficulty, DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-difficult',
  templateUrl: './difficult.component.html',
  styleUrls: ['./difficult.component.scss']
})
export class DifficultComponent implements OnInit {
  @Input() code: string;
  @Input() describtion: string;
  @Input() status: string; // mipuy or show
 // @Output() choosed = new EventEmitter();
  isLeave: boolean;
  isChoozen: boolean;
  childDifficults: Difficulty[] = [];
  newD = '';
  goHover = false;
  addTreEnable = false;
  addDiffEnable = false;
  dificlass = '';
  constructor(public db: DbService, private sd: ShareDataService, private afs: AngularFirestore) {


  }

  ngOnInit() {
    this.isChoozen = this.checkDiffiChoozen(this.code);

   // this.isLeave = !(this.getChildren() > 0);
  }

  /**
   * getChildren
   */
  public getChildren() {
    console.log('get children!!!!!!!!!!!!!!!!!!!!!!');
    console.log(this.code);
    this.childDifficults = [];
  this.db.difficultRef = this.afs.collection('difficults', ref => {
      return ref.where('Dfather', '==', this.code);
      });

      this.db.difficultRef.valueChanges().subscribe(diffis => {
    this.childDifficults = diffis;
    this.isLeave = !(this.childDifficults.length > 0);
     console.log(this.childDifficults);
    });
  }

  /**
   * checkDiffiChoozen
   */
  public checkDiffiChoozen(code: string) {
    return false;
  }

  updateDiffiStatus(checked: boolean) {
    if (checked) {
      this.getChildren();
    }
    if (this.status === 'mipuy' && checked) {
      this.db.newMipuy.push(this.code);
      this.dificlass = 'line-selected';
      console.log(this.db.newMipuy);
    } else if (this.status === 'mipuy' && !checked) {
      this.db.newMipuy.splice(this.db.newMipuy.indexOf(this.code), 1);
      this.dificlass = '';
    }
  }
  addDiffi() {
  const dif = {
    code: this.newD, description: this.newD, Dfather: this.code
  };

    this.childDifficults.push(dif);
    this.db.addDifficult(dif);
    this.newD = '';

  }
}
