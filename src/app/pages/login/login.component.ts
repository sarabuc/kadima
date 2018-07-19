import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showOptions = false;
  constructor(public db: DbService, public sd: ShareDataService) { }

  ngOnInit() {
  }
  login() {
    this.db.isLoginV = true;
    this.sd.routeTo('/');
  }
}
