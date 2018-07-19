import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ShowDifficultiesComponent } from '../show-difficulties/show-difficulties.component';

@Component({
  selector: 'app-diffi-and-methods',
  templateUrl: './diffi-and-methods.component.html',
  styleUrls: ['./diffi-and-methods.component.css']
})
export class DiffiAndMethodsComponent implements OnInit {
 @ViewChild(ShowDifficultiesComponent) showDif: ShowDifficultiesComponent;
  constructor() { }

  ngOnInit() {
  }

}
