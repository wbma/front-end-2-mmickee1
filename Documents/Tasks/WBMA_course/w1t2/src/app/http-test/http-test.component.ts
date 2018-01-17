import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  someData = 'Hello';
  imageFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imageFolder1 = 'http://media.mw.metropolia.fi/wbma/media';
  imgUrl = 'http://placekitten.com/420/300';


  getJSON() {
    this.http.get('assets/package.json').subscribe( ( data ) => {
      console.log(data);
      this.someData = data['license'];
      console.log(this.someData);
    } );
  }

  getMedia() {
    this.http.get(this.imageFolder1).subscribe( (data) => {
       console.log(data);
       this.imgUrl = data[0].filename;
       console.log(this.imgUrl);
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
