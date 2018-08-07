import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models';
import {DBHelperService} from './db-helper.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor( private afAuth: AngularFireAuth, private http: Http, ) { }

  findUserAfterKey(key: string) {
    // return this.dbHelperService.findInNodeAfterKey("users",key)
  }

  findCurrentUser() {
    // const uid = this.afAuth.auth.currentUser.uid;
    // const promise = new Promise<FirebaseObjectObservable<User>>((resolve, reject) => {
    //   this.afDb.object('/userUIDs/' + uid).subscribe(x => {
    //     resolve(this.findUserAfterKey(x.$value));
    //   });
    // });

    // return promise;
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  registerUser(user: User) {
    // const url = 'https://us-central1-pythagorasvo21.cloudfunctions.net/registerUser';
    // this.xdr(url, 'POST', JSON.stringify(user),
    //   () => { console.log('User updated in DB'); },
    //   (err) => { console.log(err); });
  }

  /**
   * Make a X-Domain request to url and callback.
   *
   * @param url {String}
   * @param method {String} HTTP verb ('GET', 'POST', 'DELETE', etc.)
   * @param data {String} request body
   * @param callback {Function} to callback on completion
   * @param errback {Function} to callback on error
   */
  xdr(url, method, data, callback, errback) {
    let req;

    if (XMLHttpRequest) {
      req = new XMLHttpRequest();

      if ('withCredentials' in req) {
        req.open(method, url, true);
        req.onerror = errback;
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 400) {
              callback(req.responseText);
            } else {
              errback(new Error('Response returned with non-OK status'));
            }
          }
        };
        req.send(data);
      }
    } else {
      errback(new Error('CORS not supported'));
    }
  }
}
