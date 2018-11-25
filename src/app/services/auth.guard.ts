import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
// import { UserService } from './user.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    // public userService: UserService,
    private router: Router,
   private authService: AuthService
  ) {}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn();
  }

  // canActivate(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {
  //     /*this.userService.getCurrentUser()
  //     .then(user => {
  //       this.router.navigate(['/home']);*/
  //       return resolve(false);
  //   /*  }, err => {
  //       return resolve(true);
  //     });*/
  //   });
  // }
}
