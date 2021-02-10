import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-page',
  templateUrl: './vacancy-page.component.html',
  styleUrls: ['./vacancy-page.component.css']
})
export class VacancyPageComponent implements OnInit {
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = true;
  vacancys: string[]= ["front-end", "beck-end", "full-stack"]
  constructor() { }

  ngOnInit(): void {
  }
showDiv(event: any){
  let vacancyChoose = event.target.value;
  if(vacancyChoose == "front-end") {
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;
  } else if(vacancyChoose == "beck-end"){
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = false;
  } else if(vacancyChoose == "full-stack"){
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;
  } else {
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    this.show4 = true;
  }
  
    
  
  
}
}
