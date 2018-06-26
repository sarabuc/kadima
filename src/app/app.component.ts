import { Component } from '@angular/core';
import { DbService } from './services/db.service';
// import { AlertsService } from '@jaspero/ng2-alerts';
// import { AlertType, AlertsService } from '@jaspero/ng-alerts';
// import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = {
    overlay: false,
    overlayClickToClose: true,
    showCloseButton: false,
    duration: 3000
  };

 code = 1234;
  fixed = false;
  mode = 'side';
  modeIndex = 0;
  /* get mode() {
       return ['side',
       'over',
       'push'][this.modeIndex];
   }*/

  menuOptions = [
    { option: ' כרטיס מטופל', icon: 'fa fa-plus', router: '/Pcards', admin: false },
    { option: ' כרטיס מטפל', icon: 'fa fa-plus', router: '/Tcards', admin: true },
    { option: 'הוספת תלמיד', icon: 'fa fa-plus', router: '/addPatient', admin: true },
    { option: 'הוספת מורה', icon: 'fa fa-plus', router: '/addTherapist', admin: true },
    { option: 'דיווח על שיעור', icon: 'fa fa-plus', router: '/newTreatmentInfo', admin: false },
    { option: 'קשיים וטיפולים', icon: 'fa fa-plus', router: '/', admin: true },
    { option: 'הנפקת דוחות ', icon: 'fa fa-plus', router: '/getData', admin: true },
    { option: 'כרטסת כספית', icon: 'fa fa-plus', router: '/bookeeping', admin: true },
    { option: 'הגדרות משתמש ', icon: 'fa fa-plus', router: '/setting', admin: true },
    { option: 'צור קשר', icon: 'fa fa-plus', router: '/contact', admin: true },
  ];

  modeClass;
  modeDisplay;

  constructor(
  public db: DbService,
    /*private _alert: AlertsService,*/
    private router: Router) {


  }

  getmode() {
    return 'side';
  }

  createAlert(type, message, tytle) {
    if (tytle === '') {
     // this._alert.create(type, message);
    } else {
     // this._alert.create(type, message, tytle);
    }
  }

  apears(user) {
  //  return (this.dbs.userNameList.indexOf(user) > 0);
  }

  isLogin() {
    return this.db.isLogin();
  }

  login() {
    this.db.isLoginV = true;
  }
   logout() {
    this.db.isLoginV = false;
  }

}
