import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.scss']
})
export class BeforeLoginComponent implements OnInit {
  modeClass;
  modeDisplay;

  constructor(public db: DbService, private router: Router) { }

  ngOnInit() {
  }


  isLogin() {
    return this.db.isLoginV;
  }

  login() {
    this.db.isLoginV = true;
   // this.router.navigate(['/home']);
  }

  apears(user) {

  }
}
