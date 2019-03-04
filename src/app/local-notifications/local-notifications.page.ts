import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {UserData} from '../shared/user-data';
import {User} from 'firebase';
import { AuthServiceService} from '../auth-service.service';

// @ts-ignore
@Component({
  selector: 'app-local-notifications',
  templateUrl: './local-notifications.page.html',
  styleUrls: ['./local-notifications.page.scss'],
})
export class LocalNotificationsPage implements OnInit {

  data = { title: '', description: '', date: '', time: '' };

    public _db: AngularFirestore;
    public items: Observable<any[]>;
    public userData: UserData;
    public userEmail: string;
    public basePath = 'items-';

  constructor( public localNotify: LocalNotifications, private afs: AngularFirestore, public service: AuthServiceService) {

      this.userEmail = this.service.getUserEmail();
      this.basePath += this.userEmail;

      this.items = afs.collection(this.basePath).valueChanges();
      this._db = afs;
      console.log(this.items);
  }

  ngOnInit() {

  }

  submit() {

    console.log(this.data);
    const date = new Date(this.data.date + ' ' + this.data.time);
    console.log(date);

    this.localNotify.schedule({
      id: 1,
      text: this.data.description,
      trigger: {at: date},
      led: 'FF0000',
      sound: null,
      title: this.data.title
    });

    this.userData = this.data;
    console.log(this.userData);

    let itemCollection = this._db.collection<UserData>(this.basePath);
    itemCollection.add(this.userData);

    this.data = { title: '', description: '', date: '', time: '' };
  }

}
