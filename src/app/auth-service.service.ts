import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    public userEmail: string;
    constructor(private firebaseAuth: AngularFireAuth , public router: Router) { }

    public StoreRegisterDetailsInLocalStorage(fullname: string, email: string, username: string, password: string): void {

        try {
          this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then( function() {
              alert('Registered Successfully. Now Login!!');
          }).catch( () => {
              alert('Invalid email/password should be of 6 characters');
          });
        } catch (e) {
            console.error(e);
        }
    }

    public CheckUserCredentials(email: string, password: string) {


        this.userEmail = email;
        return new Promise<any>((resolve, reject) => {
            this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => { resolve(res); }
                , err => {reject(err); });
        });
    }

    public getUserEmail(): string {
        return this.userEmail;
    }

}
