import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-hello',
  templateUrl: './my-hello.component.html',
  styleUrls: ['./my-hello.component.css']
})
export class MyHelloComponent implements OnInit {
  showElement: string = "";
  newElement: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showDiv(){
    if(this.showElement.length > 5) {
      this.newElement = true;
    } else {
      this.newElement = false;
    }
  }
}
