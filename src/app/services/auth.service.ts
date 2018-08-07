import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
// import { CalendarEvent, } from "angular-calendar";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';



export interface USER {
  isAdmin: boolean;
  userName: string;
  password: string;
  email: string;
  name: string;
  id: string;
}





@Injectable()
export class AuthService {
  public users_list: AngularFirestoreCollection<any>;
  private _user;
  public users_details: USER[];
  public current_user: USER;
  public isLogin = false;




  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public router: Router) {
    this.users_list = this.afs.collection('users');

    this.users_list.valueChanges().subscribe(res => {
      this.users_details = res;
    });


  }



  public exist_user(email: string) {

    for (let i = 0; i < this.users_details.length; i++) {
      if ((this.users_details[i].email === email)) {
        // if exist create public user
        // ? how do new corrent_user?
        this.current_user = this.users_details[i];
        return true;
      }

    }
    return false;
  }


  public exist_user_no_change(email: string) {

    for (let i = 0; i < this.users_details.length; i++) {
      if ((this.users_details[i].email === email)) {
        // if exist create public user
        return true;
      }

    }
    return false;
  }


  public loginWithGoogle() {
    return new Promise((res, rej) => {
      this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()).then(user => {
         // const verify = user.additionalUserInfo.profile.verified_email;
          // if (verify) {
          //   const email = user.additionalUserInfo.profile.email;
          //   if (this.exist_user(email)) {
          //     this.isLogin = true;
          //     res(true);
          //   } else {
          //     this.isLogin = false;

          //     res(false);
          //   }
          // }

        });
    });
  }
  public get login_success() {
    console.log('get login' + this.isLogin);
    return this.isLogin;
  }

  public loginWIthEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {

      });

  }

  public signupWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      });
  }

  /*public isLogin() {
    console.log(!!this.afAuth.auth.currentUser)
    return !!this.afAuth.auth.currentUser;
  }*/

  public get nameAndFname() {
    return this._user ? this._user.displayName : 'guest';
  }








  logout() {
    this.afAuth.auth.signOut();
  }
}

