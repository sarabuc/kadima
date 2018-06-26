import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
@Injectable()
export class AuthService {
  private _user;
  private isLogin = false;
  constructor(public afAuth: AngularFireAuth , public router: Router) { }


  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(user => {
       // console.log(user);

        this._user = user.user;

        this.isLogin = true;
      });
  }




  public  get login_success() {
    console.log('get login' + this.isLogin);
    return this.isLogin;
  }


 /* public isLogin() {
  //  console.log(!!this.afAuth.auth.currentUser)
    return !!this.afAuth.auth.currentUser;
  }*/

  logout() {
    this.afAuth.auth.signOut();
  }

  public get nameAndFname() {
    return this._user ? this._user.displayName : 'guest';
  }
}
