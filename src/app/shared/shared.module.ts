import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  UserService} from './services/';
import { TestPipePipe, FindPipe } from './pipes/';



@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [
    TestPipePipe,
    FindPipe,
   ],
  exports: [
    TestPipePipe,
    FindPipe
    ],
  providers: [
    UserService]

})
export class SharedModule { }
