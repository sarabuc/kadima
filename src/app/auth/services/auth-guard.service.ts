import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable, from  } from 'rxjs';
import { map, take, tap} from 'rxjs/operators';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return from(this.auth.authState)
    .pipe(take(1))
    .pipe(map(state => !!state))
    .pipe(tap(authenticated => {
        if ( !authenticated ) {
          this.router.navigate([ '/login' ]);
        }
      }));
  }

}
