import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ShareDataService } from '../../services/share-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})



export class HomePageComponent implements OnInit {







  features1 = [
    { route: 'Pcards/card', class: 'fa fa-id-card fa-4x  accent-3 amber-text', text: 'כרטיס תלמיד', sub: 'כל הפרטים על התלמיד שלך'},
    {
      route: 'newTreatmentInfo', class: 'fa fa-calendar-check-o fa-4x accent-3 amber-text',
     text: 'דווח  טיפול', sub: 'דוח על טיפול שהתקים'},
    { route: 'newMipuy', class: 'fa fa-plus-square fa-4x accent-3 amber-text', text: 'מיפוי חדש', sub: 'הוסף מיפוי חדש לתלמידים קימים'},
    { route: 'reports', class: 'fa fa-file-text fa-4x accent-3 amber-text', text: 'דוחות', sub: 'הנפק דוחות וסיכומים הדרושים לך'}
  ];
  features2 = [
    { route: 'Tcards', class: 'fa fa-id-card-o fa-4x yellow-text', text: 'כרטיס מטפל',
    class2: 'wow fadeInUp col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1' },
    {
      route: 'newGrades', class: 'fa fa-plus-circle fa-4x yellow-text', text: 'הוספת ציוני כתה',
    class2: 'wow fadeInUp col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1'},
    {
      route: 'teams', class: 'fa fa-group fa-4x yellow-text', text: 'ניהול קבוצות ',
    class2: 'wow fadeInUp col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1' },
    {
      route: 'patList/progress', class: 'fa fa-check fa-4x yellow-text', text: 'ציונים והתקדמות',
    class2: 'wow fadeInUp col-lg-2 col-md-2 col-sm-6 col-xs-6 mb-4 pt-1' },
    {

      route: 'Treatment-planning/plan', class: 'fa fa-navicon fa-4x yellow-text', text: 'תכנן תהליך טיפול',
    class2: 'wow fadeInUp col-lg-2 col-md-2 col-sm-6 col-xs-6 mb-4 pt-1' }
   ];


   featuresUser = [
    { route: 'Pcards/card', class: 'fa fa-id-card fa-4x  accent-3 amber-text', text: 'כרטיס תלמיד', sub: 'כל הפרטים על התלמיד שלך'},
    {
      route: 'newTreatmentInfo', class: 'fa fa-calendar-check-o fa-4x accent-3 amber-text',
     text: 'דווח  טיפול', sub: 'דוח על טיפול שהתקים'},
  
    { route: 'temp', class: 'fa fa-calendar fa-4x accent-3 amber-text', text: 'שיבוץ שעות ',
     sub: 'מערכת ולוח זמנים '
    },
   {
      route: 'teams', class: 'fa fa-group fa-4x accent-3 amber-text', text: ' קבוצות '
      , sub: 'דוח על טיפול קבוצתי '
     },
    
   ];

  constructor(public db: DbService, public sd: ShareDataService) {

  }

  onSelect(route) {
   // //console.log(route);

   this.sd.routeTo(route);

  }



  ngOnInit() {
    // guard
    if ((!this.db.isLogin()) || (!this.db.userNow)) {
      // this.sd.createAlert('info', 'עליך לבצע התחברות', '');
      this.sd.routeTo('login');
    }
  }


}
