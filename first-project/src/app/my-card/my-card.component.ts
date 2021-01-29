import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
  public name ="";
  cardText: string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  someString: string = "";
  cardTextValue: string = "hello world from angular";
  public color = "";
  constructor() { }
  newColor: string = "black";
  changeTextColor: string = ""
  ngOnInit(): void {
  }
changeText(){
  this.cardText = this.cardTextValue;
}
changeColor() {
  this.newColor = this.changeTextColor;
  
}

}
