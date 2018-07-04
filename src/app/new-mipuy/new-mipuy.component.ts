import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DbService } from '../services/db.service';
import { ShareDataService } from '../services/share-data.service';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
@Component({
  selector: 'app-new-mipuy',
  templateUrl: './new-mipuy.component.html',
  styleUrls: ['./new-mipuy.component.css']
})
export class NewMipuyComponent implements OnInit {

selectedState: any;
selectedcomm = '';
comments: string[] = ['ניכר שיפור', 'לברר מול מורה', 'לדבר עם הורים', 'להעביר לאבחון', 'להעביר לתכנון טיפול'];
Pid;
selectedOptions: string[] = [];
  constructor(public db: DbService, public sd: ShareDataService) {}
    ngOnInit() {

  }
  saveComments() {
    this.selectedOptions.forEach(element => {
      const com = {
        Pid: this.Pid,
        commentInfo: element,
        commentDate: new Date()
      };
      this.db.addComment(com);

    });
    this.selectedOptions = [];
  }

  onSelectedOptionsChange(values: string[]) {
    this.selectedOptions = values;
    // this._recipeService.favorites = this.selectedOptions;
   /* this.selectedOptions.forEach(element => {
      const com = {
        Pid: this.Pid,
        commentInfo: element,
        commentDate: new Date()
      };
      this.db.addComment(com);

    });*/

  }
}


