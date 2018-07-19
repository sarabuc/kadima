import { Component, OnInit, Input } from '@angular/core';
import { TreatmentInfo, DbService, Therapist } from '../../services/db.service';

@Component({
  selector: 'app-show-treatment-info',
  templateUrl: './show-treatment-info.component.html',
  styleUrls: ['./show-treatment-info.component.css']
})
export class ShowTreatmentInfoComponent implements OnInit {
  @Input() treat: TreatmentInfo;
  @Input() status: string;
  constructor(public db: DbService) { }


  ngOnInit() {
    // console.log(this.status);
    if (!this.status) {
      this.status = '';
    }
  }

}
