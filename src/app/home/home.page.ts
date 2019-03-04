import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  invalidCredentials: string;

  constructor( private localStorage: AuthServiceService, private router: Router ) {

    this.invalidCredentials = null;
  }

  goLogin() {
    this.invalidCredentials = null;

    this.localStorage.CheckUserCredentials(this.email, this.password)
        .then(res => {
          this.router.navigate(['/local-notifications']);
        }, err => {
          this.invalidCredentials = 'Invalid email/password';
        });

  }
  goRegister() {
    this.router.navigateByUrl('/register');
  }
}
