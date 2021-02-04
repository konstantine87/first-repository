import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <h1>{{date | date: 'short'}}</h1>
 <h2>{{message | uppercase}} {{name | titlecase}}</h2>
 <h1>{{person | json | titlecase}}</h1>
 <h2>{{0.25 | currency: 'EUR'}}</h2>
 <h2>{{0.98 | currency: 'USD'}}</h2>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  
  constructor() { }
  public date = new Date;
  public name = "konstantine";
  public message = "welcome to our programing klass: ";
  public person = {
    "firstname": "konstantine",
    "lastname": "mamageishvili"
  }

  ngOnInit(): void {
  }

}
