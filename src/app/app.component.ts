import { Component } from '@angular/core';
import { DbService } from './services/db.service';
// import { AlertsService } from '@jaspero/ng2-alerts';
// import { AlertType, AlertsService } from '@jaspero/ng-alerts';
// import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from './services/share-data.service';

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
  mode = 'over';
  modeIndex = 0;
  /* get mode() {
       return ['side',
       'over',
       'push'][this.modeIndex];
   }*/

  menuOptions = [
    { option: ' כרטיס מטופל', icon: 'fa fa-address-card ml-4 purple-text', router: '/Pcards/card', admin: false },
    { option: ' כרטיס מטפל', icon: 'fa fa-id-card-o ml-4 purple-text', router: '/Tcards', admin: true },
    { option: 'הוספת תלמיד', icon: 'fa fa-plus ml-4 purple-text', router: '/addPatient', admin: true },
    { option: 'הוספת מורה', icon: 'fa fa-plus ml-4 purple-text', router: '/addTherapist', admin: true },
    { option: 'דיווח על שיעור', icon: 'fa fa-calendar-check-o ml-4 purple-text', router: '/newTreatmentInfo', admin: false },
    { option: 'קשיים וטיפולים', icon: 'fa fa-th-list ml-4 purple-text', router: '/diffiAndMethods', admin: true },
    { option: 'הנפקת דוחות ', icon: 'fa fa-file ml-4 purple-text', router: '/getData', admin: true },
    { option:  'יומן ומערכת', icon: 'fa fa-file ml-4 purple-text', router: '/temp', admin: true },
    { option: 'כרטסת כספית', icon: 'fa fa-plus ml-4 purple-text', router: '/bookeeping', admin: true },
    { option: 'הגדרות משתמש ', icon: 'fa fa-gears ml-4 purple-text', router: '/setting', admin: true },
    { option: 'צור קשר', icon: 'fa fa-phone ml-4 purple-text', router: '/contact', admin: true },
  ];

  modeClass;
  modeDisplay;

  constructor(
  public db: DbService,
    /*private _alert: AlertsService,*/
    private router: Router,
  public sd: ShareDataService) {
  }

  getmode() {
    return 'side';
  }
/*
  createAlert(type, message, tytle) {
    if (tytle === '') {
     // this._alert.create(type, message);
    } else {
     // this._alert.create(type, message, tytle);
    }
  }*/

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
    this.sd.routeTo('/login');
  }

}
