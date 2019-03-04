import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-urlpreview',
  templateUrl: './urlpreview.page.html',
  styleUrls: ['./urlpreview.page.scss'],
})
export class UrlpreviewPage implements OnInit {

  urlValue: string;
  urlPreviewDetails: any;

  constructor(private http: HttpClient ) { }

  ngOnInit() {

    const requestOptions = {
      headers: new HttpHeaders({'Ocp-Apim-Subscription-Key': '1bdd1a97466a4a32887c2a3972e91913'}),
    };

    this.http.get('https://api.labs.cognitive.microsoft.com/urlpreview/v7.0/search?q=https://swiftkey.com/en' ,
        requestOptions).subscribe(data => {
      this.urlPreviewDetails = data;
      console.log(data);

    });

  }

  getPreview() {

    const requestOptions = {
      headers: new HttpHeaders({'Ocp-Apim-Subscription-Key': '1bdd1a97466a4a32887c2a3972e91913'}),
    };

    this.http.get('https://api.labs.cognitive.microsoft.com/urlpreview/v7.0/search?q=' + this.urlValue ,
        requestOptions).subscribe(data => {
      this.urlPreviewDetails = data;
      console.log(data);

    });
  }

}
