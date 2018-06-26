import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-show-difficulties',
  templateUrl: './show-difficulties.component.html',
  styleUrls: ['./show-difficulties.component.scss']
})
export class ShowDifficultiesComponent implements OnInit {

  constructor(public sd: ShareDataService) { }

  ngOnInit() {
  }

}
