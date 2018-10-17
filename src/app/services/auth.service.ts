import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  delay } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ShareDataService } from './share-data.service';
import { DbService } from './db.service';


@Injectable()
export class AuthService {

  constructor(
  private sd: ShareDataService,
   public afAuth: AngularFireAuth,
   private db: DbService
 ) {}

  // doFacebookLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     const provider = new firebase.auth.FacebookAuthProvider();
  //     this.afAuth.auth
  //     .signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     }, err => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   });
  // }

  // doTwitterLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     const provider = new firebase.auth.TwitterAuthProvider();
  //     this.afAuth.auth
  //     .signInWithPopup(provider)
  //     .then(res => {
  //       resolve(res);
  //     }, err => {
  //       console.log(err);
  //       reject(err);
  //     });
  //   });
  // }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.sd.createAlert('success', 'נכנסת לחשבונך בהצלחה', '');
        resolve(res);
      }, err => {
        console.log(err);
        this.sd.createAlert('error', 'לא הצלחנו להכנס לחשבונך', '');
        reject(err);
      });
    });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.sd.createAlert('success', 'הוספת חשבון בהצלחה', '');
        resolve(res);
      }, err => reject(err));
    });
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        this.db.isLoginV = true;
		   this.sd.createAlert('success', 'נכנסת לחשבונך בהצלחה', '');
        resolve(res);
      }, err => reject(err));
    });
  }

  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        this.afAuth.auth.signOut();
        resolve();
      } else {
        reject();
      }
    });
  }


}
