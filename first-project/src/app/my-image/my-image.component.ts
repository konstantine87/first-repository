import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  changeUrl: string = "";
  selectImages: string[] = ["assets/images/123.png", "assets/images/Community FAQs on Codecademy Exercises.jpeg"];
  constructor() { }

  ngOnInit(): void {
  }
imageChange(event: any) {
  this.changeUrl = event.target.value;
  
}
}
