import { Component, OnInit } from '@angular/core';
import { ModalBackdropComponent, ModalBackdropOptions } from 'angular-bootstrap-md';
import { ModalOptions, MDBModalRef } from 'angular-bootstrap-md';
import { ModalDirective } from 'angular-bootstrap-md';
import { ModalModule } from 'angular-bootstrap-md';
import { MDBModalService } from 'angular-bootstrap-md';
import { ModalContainerComponent } from 'angular-bootstrap-md';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
clicked= true;
  constructor() { }

  ngOnInit() {
  }

}
