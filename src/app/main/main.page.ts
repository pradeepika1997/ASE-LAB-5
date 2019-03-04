import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  statusCode: string;
  sentimentValue: string;
  classifyDetails: any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.classifyDetails = {'positive': 0, 'negative': 0};
  }

  doClassify() {
    this.http.get('https://cors-anywhere.herokuapp.com/https://api.uclassify.com/v1/uClassify/Sentiment/'
    + 'classify/?readKey=DyLNsR66KSvN&text='
    + this.sentimentValue ).subscribe(data => {
      this.classifyDetails = data;
      console.log(data);

    });


  }
}
