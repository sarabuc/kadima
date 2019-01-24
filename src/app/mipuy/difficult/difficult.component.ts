import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Difficulty, DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-difficult',
  templateUrl: './difficult.component.html',
  styleUrls: ['./difficult.component.scss']
})
export class DifficultComponent implements OnInit, OnChanges {
  @Input() code: string;
  @Input() describtion: string;
  @Input() status: string; // mipuy or show
  @Input() index: string;
  @Input() allFathers: string;
 // @Output() choosed = new EventEmitter();
  isLeave = true;
  childrenAreOpen = false;
  isChoozen: boolean;
  childDifficults: Difficulty[] = [];
  newD = '';
  goHover = false;
  addTreEnable = false;
  addDiffEnable = false;
  dificlass = '';
  degrees = [
    { value: 1, label: 'קל', class: 'font-weight:100'},
    { value: 2, label: 'בינוני', class: 'font-weight:300' },
    { value: 3, label: 'קשה', class: 'font-weight:500' },
    { value: 4, label: 'קשה מאוד', class: 'font-weight:700' }];


  constructor(public db: DbService, private sd: ShareDataService, private afs: AngularFirestore) {


  }

  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
    this.checkIfIsChoosen();
    if (this.status === 'area') {
      this.status = 'mipuy';
    }
    this.getChildren();

  }
    ngOnChanges() {

      if (this.status === 'area') {
        this.status = 'mipuy';
      }
      this.getChildren();


  }

  /**
   * getChildren
   */
  public getChildren() {
   // //console.log('get children!!!!!!!!!!!!!!!!!!!!!!');
   // //console.log(this.code);
    this.childDifficults = [];
  this.db.difficultRef = this.afs.collection('difficults', ref => {
      return ref.where('Dfather', '==', this.code);
      });

      this.db.difficultRef.valueChanges().subscribe(diffis => {
    this.childDifficults = diffis;
    this.isLeave = !(this.childDifficults.length > 0);
    // //console.log(this.childDifficults);
    });
  }

  /**
   * checkDiffiChoozen
   */
  public checkDiffiChoozen(code: string) {
    return false;
  }

  updateDiffiStatus(checked: boolean) {
//console.log(this);
    if (checked) {
      this.isChoozen = true;
      this.childrenAreOpen = true;
    } else {
      this.isChoozen = false;
    }
    if (this.status === 'mipuy' && checked) {
      //console.log('**********************************************');
      this.db.newMipuy[this.code] = 1;
      this.dificlass = 'line-selected';
      //console.log(this.db.newMipuy);
    } else if (this.status === 'mipuy' && !checked) {
     delete this.db.newMipuy[this.code];
      this.dificlass = '';
    }
  }
  async addDiffi() {

  const dif = {
    code: this.newD,
    description: this.newD,
    Dfather: this.code,
    isLeave: true,
    index: '' + this.index + '.',
    allFathers: '' + this.allFathers + this.code
  };

    this.childDifficults.push(dif);
    this.db.addDifficult(dif);
    this.newD = '';

  }

  checkIfIsChoosen() {

   //  this.isChoozen = this.db.newMipuy.indexOf(this.code) > -1;
    if (!this.isChoozen) {
      this.dificlass = '';
    }
     return this.isChoozen;
  }


  onSelectedDegree(event) {
    //  //console.log(event);
    this.db.newMipuy[this.code] = event.value.value;
  }
}
