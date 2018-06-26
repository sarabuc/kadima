import { Component, OnInit, Input } from '@angular/core';
import { Difficulty, DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-difficult',
  templateUrl: './difficult.component.html',
  styleUrls: ['./difficult.component.scss']
})
export class DifficultComponent implements OnInit {
  @Input() code: string;
  @Input() describtion: string;
  isLeave: boolean;
  isChoozen: boolean;
  childDifficults: Difficulty [] = [];
  newD = '';
  goHover = false;
  constructor(public dbs: DbService, private sd: ShareDataService ) {
    

  }

  ngOnInit() {
    this.isChoozen = this.checkDiffiChoozen(this.code);
    this.isLeave = !(this.getChildren() > 0);
  }

  /**
   * getChildren
   */
  public getChildren() {
    console.log(this.code);
    this.childDifficults = [];
    this.sd.treatmentCategories2.forEach(diffi => {
      if (this.code === diffi.Dfather) {
        this.childDifficults.push(diffi);
      }
    });
  console.log(this.childDifficults);
    return this.childDifficults.length;
  }

  /**
   * checkDiffiChoozen
   */
  public checkDiffiChoozen(code: string) {
    return false;
  }

  updateDiffiStatus(checked: boolean) {

  }
  addDiffi() {


    //...
    this.childDifficults.push({code: this.newD, description: this.newD, Dfather: this.code});
    this.newD = '';
    
  }
}
