import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css']
})
export class NewCalculatorComponent implements OnInit {
  firstNum: number = 0;
  secondNum: number = 0;
  result: string = "";
  newResult: string = "";
  constructor() { }

  ngOnInit(): void {
  }
 sum() {
   let sum = this.firstNum + this.secondNum;

   this.result = sum.toString();
 }
 sub() {
   let sub = this.firstNum - this.secondNum;
  this.result = sub.toString();
 }
 mult(){
  let result = this.firstNum * this.secondNum;
  this.result = result.toString();
 }
 div(){
   
   let div = this.firstNum / this.secondNum;
   this.result = div.toString();
   if(this.secondNum == 0) {
     this.newResult = "it's unpossible";
     this.result = this.newResult;
 
   } 
   
 }
 zeroNums(){
   this.firstNum = 0;
   this.secondNum = 0;
   this.result = "make some mathematick actions..."
 }
}
