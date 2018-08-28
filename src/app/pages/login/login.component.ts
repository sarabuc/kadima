import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { ShareDataService } from '../../services/share-data.service';
import { AuthService } from '../../services/auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showOptions = false;
  loginForm: FormGroup;
  errorMessage: '';
  constructor(public db: DbService,
    public sd: ShareDataService,
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
    }

  ngOnInit() {
  }
  // login() {
  //   this.db.isLoginV = true;
  //   this.sd.routeTo('/home');
  // }






  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tryFacebookLogin() {
  //   this.authService.doFacebookLogin()
  //     .then(res => {
  //       this.router.navigate(['/user']);
  //     });
  // }

  // tryTwitterLogin() {
  //   this.authService.doTwitterLogin()
  //     .then(res => {
  //       this.router.navigate(['/user']);
  //     });
  // }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.db.isLoginV = true;
        this.router.navigate(['/home']);
      });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.db.isLoginV = true;
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
