import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public db: DbService, private router: Router) { }

  ngOnInit() {
  }


  isLogin() {
    return this.db.isLogin();
  }

  login() {
    this.db.isLoginV = true;
    this.router.navigate(['/home']);
  }
  logout() {
    this.db.isLoginV = false;
    this.router.navigate(['/home']);
  }
  apears() {

  }

}
