import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ShowDifficultiesComponent } from '../show-difficulties/show-difficulties.component';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-diffi-and-methods',
  templateUrl: './diffi-and-methods.component.html',
  styleUrls: ['./diffi-and-methods.component.css']
})
export class DiffiAndMethodsComponent implements OnInit {
 @ViewChild(ShowDifficultiesComponent) showDif: ShowDifficultiesComponent;
  constructor(private db: DbService, private sd: ShareDataService) { }

  ngOnInit() {
     // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }

}
