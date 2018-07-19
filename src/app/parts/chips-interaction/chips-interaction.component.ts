import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-chips-interaction',
  templateUrl: './chips-interaction.component.html',
  styleUrls: ['./chips-interaction.component.css']
})
export class ChipsInteractionComponent implements OnInit {
 @Output() choosed = new EventEmitter();
  cls = '';
  selectedCls = '';
  clsY = this.cls;
  clsN = this.cls;
  clsM = this.cls;
  constructor() {

  }
clickOnChip(chip: string) {
this.choosed.emit(chip);
}

  ngOnInit() {
  }

}
