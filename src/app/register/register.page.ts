import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fullname: string;
  email: string;
  username: string;
  password: string;

  constructor(private localStorage: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  goRegister(): void {
    this.localStorage.StoreRegisterDetailsInLocalStorage(this.fullname, this.email, this.username, this.password);
    this.router.navigate(['/home']);
  }
}
