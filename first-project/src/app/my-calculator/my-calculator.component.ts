import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {
  firstNum: number = 0;
  secondNum: number = 0;
  resultAdd: string = "";
  resultMultpl: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  calculator(){
   var result = this.secondNum + this.firstNum;
   var multpl = this.secondNum * this.firstNum;
   this.resultAdd = result.toString();
   this.resultMultpl = multpl.toString();

  }
}
