import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-numbers2',
  templateUrl: './my-numbers2.component.html',
  styleUrls: ['./my-numbers2.component.css']
})
export class MyNumbers2Component implements OnInit {
  number2: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
 sum() {
   this.number2 += 1;
 }
 sub() {
   this.number2 -= 1;
 }
}
