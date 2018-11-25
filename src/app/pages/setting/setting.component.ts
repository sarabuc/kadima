import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const navItems = $('.admin-menu li > a');
    const navListItems = $('.admin-menu li');
    const allWells = $('.admin-content');
    const allWellsExceptFirst = $('.admin-content:not(:first)');
    allWellsExceptFirst.hide();
    navItems.click(function (e) {
      e.preventDefault();
      navListItems.removeClass('active');
      $(this).closest('li').addClass('active');
      allWells.hide();
      const target = $(this).attr('data-target-id');
      $('#' + target).show();
    });
  }

}
