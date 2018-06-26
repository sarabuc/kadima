import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page2.component.html',
  styleUrls: ['./home-page.component.scss']
})



export class HomePageComponent implements OnInit {







  features1 = [
    { route: 'recipeList', class: 'fa fa-list-ul fa-4x orange-text', text: 'כרטיס תלמיד', sub: 'get list of all your recipes'},
    { route: 'recipe', class: 'fa fa-plus-circle fa-4x orange-text', text: 'דווח על טיפול', sub: 'add new recipes to your Say Cook Book'},
     { route: 'galery', class: 'fa fa-image fa-4x orange-text', text: 'מיפוי חדש', sub: 'shoes images of all your recipes'},
    { route: 'categories', class: 'fa fa-folder fa-4x orange-text', text: 'דוחות', sub: 'הנפק דוחות וסיכומים הדרושים לך'}
  ];
  features2 = [
    { route: 'about', class: 'fa fa-home fa-4x orange-text', text: 'כרטיס מטפל',
    class2: 'wow fadeInUp link-cosmo col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1' },
    { route: 'voice-setting', class: 'fa fa-gears fa-4x orange-text', text: 'הוספת תלמידים',
    class2: 'wow fadeInUp link-cosmo col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1'},
    { route: 'share', class: 'fa fa-share fa-4x orange-text', text: 'הוספת מטפל',
    class2: 'wow fadeInUp link-cosmo col-lg-2 col-md-2 col-sm-4 col-xs-6 mb-4 pt-1' },
    { route: 'search-by-keywords', class: 'fa fa-search fa-4x orange-text', text: 'בדוק התקדמות',
    class2: 'wow fadeInUp link-cosmo col-lg-2 col-md-2 col-sm-6 col-xs-6 mb-4 pt-1' },
    { route: 'search-by-categories', class: 'fa fa-search fa-4x orange-text', text: 'תכנן תהליך טיפול',
    class2: 'wow fadeInUp link-cosmo col-lg-2 col-md-2 col-sm-6 col-xs-6 mb-4 pt-1' }
   ];

 images = [
    { route: 'recipeList', src: '45.jpg', head: 'Recipes List', sub: 'get list of all your recipes' },
    { route: 'recipe', src: '22.jpg', head: 'New Recipe', sub: 'add new recipes to your app' },
    { route: '/#fav', src: '24.jpg', head: 'Favorites', sub: 'goto your favorite recipes' },
    { route: 'recipeList', src: '47.jpg', head: 'Recipes List', sub: 'get list of all your recipes' },
    { route: 'recipe', src: '29.jpg', head: 'New Recipe', sub: 'add new recipes to your app' },
    { route: '/#fav', src: '16.jpg', head: 'Favorites', sub: 'goto your favorite recipes' }
  ];
 /*wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});*/
cols: any;
  rows: any;
  width: any;
color: string;

  tiles = [
    {
      route: '/recipeList', text: 'List Of Recipies', icon: 'list', tooltip: 'Recipes'
    },
    {
      route: '/recipe', subtext: '', text: '2', icon: 'add', tooltip: 'Create Recipe'
    },
    {
      route: 'categories', text: '3', icon: 'category', tooltip: 'Categories'
    },
    {
      route: 'search-by-categories', text: '4', icon: 'search', tooltip: 'Search by Category'
    },
    {
      route: 'about', text: '5', icon: 'home', tooltip: 'About'
    },
    {
      route: 'search-by-keywords', text: '6', icon: 'search', tooltip: 'Search by Key words'
    },
    {
      route: 'galery', text: '7', icon: 'image', tooltip: 'Galery'
    },
    {
      route: 'share', text: '8', icon: 'share', tooltip: 'Share'
    },
    {
      route: 'categories/add-category', text: '9', icon: 'add', tooltip: 'Create Category'
    }
    ,
    {
      route: 'voice-setting', text: '7', icon: 'settings', tooltip: 'Settings'
    },
    {
      route: 'share', text: '8', icon: 'share'
    },
    {
      route: 'categories/add-category', text: '9', icon: 'add'
    }
  ];


  constructor(public db: DbService, private router: Router) {
    this.color = 'red';
    this.cols = 3;
   // new WOW().init();
  }

  onSelect(route) {
    console.log(route);

    this.router.navigate([route]);

  }



  ngOnInit() {
  }

  contact(mail, subject, data) {

  }
  isLogin() {
    return this.db.isLogin;
  }
}
