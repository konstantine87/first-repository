import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-check',
  templateUrl: './numbers-check.component.html',
  styleUrls: ['./numbers-check.component.css']
})
export class NumbersCheckComponent implements OnInit {
  firstNum: number = 0;
  secondNum: number = 0;
  resultText: string = "here is big number "
  constructor() { }

  ngOnInit(): void {
  }
  checkNumbers() {
    if(this.firstNum > this.secondNum) {
      this.resultText = this.firstNum +" first num is more";
    } 
    if(this.firstNum < this.secondNum) {
      this.resultText = this.secondNum +" second num is more";
    }
    else{
      this.firstNum + " equals " + this.secondNum
    }
  }

}
