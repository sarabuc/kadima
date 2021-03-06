import { Component, OnInit } from '@angular/core';
import { DbService } from './services/db.service';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
 /* user: FirebaseUserModel = new FirebaseUserModel();
  options = {
    overlay: false,
    overlayClickToClose: true,
    showCloseButton: false,
    duration: 3000
  };*/

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
    { option: ' כרטיס מטופל', icon: 'fa fa-address-card ml-4 purple-text', router: '/Pcards/card', admin: false },
    { option: ' כרטיס מטפל', icon: 'fa fa-id-card-o ml-4 purple-text', router: '/Tcards', admin: false },
    { option: 'הוספת תלמיד', icon: 'fa fa-plus ml-4 purple-text', router: '/addPatient', admin: true },
    { option: 'הוספת מורה', icon: 'fa fa-plus ml-4 purple-text', router: '/addTherapist', admin: true },
    { option: 'דיווח על שיעור', icon: 'fa fa-calendar-check-o ml-4 purple-text', router: '/newTreatmentInfo', admin: false },
    { option: 'קשיים וטיפולים', icon: 'fa fa-th-list ml-4 purple-text', router: '/diffiAndMethods', admin: true },
    { option: 'הנפקת דוחות ', icon: 'fa fa-file ml-4 purple-text', router: '/reports', admin: true },
    { option:  'יומן ומערכת', icon: 'fa fa-file ml-4 purple-text', router: '/temp', admin: true },
    { option: 'כרטסת כספית', icon: 'fa fa-plus ml-4 purple-text', router: '/bookeeping', admin: true },
    { option: 'הגדרות משתמש ', icon: 'fa fa-gears ml-4 purple-text', router: '/setting', admin: true },
    { option: 'צור קשר', icon: 'fa fa-phone ml-4 purple-text', router: '/contact', admin: true },
  ];

  modeClass;
  modeDisplay;

  constructor(
  public db: DbService,
   // public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
  public sd: ShareDataService) {
  }

  getmode() {
    return 'side';
  }

  apears(user) {
    return (this.db.userNameList.indexOf(user) > 0);
  }

  isLogin() {
    return this.db.isLogin();
  }

  
  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
       // this.user = data;
     //   this.createForm(this.user.name);
      }
    });
  }

  logout(sidenav) {
    sidenav.close( 'mouse')
    this.db.isLoginV = false;
    this.sd.routeTo('/login');
    this.db.userNow = undefined;
    this.sd.createAlert('success', 'יצאת בהצלחה מחשבונך', '');
  }

  // logout() {
  //   this.authService.doLogout()
  //     .then((res) => {
  //       this.location.back();
  //       this.sd.routeTo('/home');
  //       this.db.isLoginV = false;
  //       this.sd.createAlert('success', 'יצאת בהצלחה מחשבונך', '');
  //     }, (error) => {
  //       this.sd.createAlert('error', 'יציאה מהחשבון נכשלה', '');
  //     });
  // }
}
