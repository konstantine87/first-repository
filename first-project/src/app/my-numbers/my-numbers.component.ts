import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-numbers',
  templateUrl: './my-numbers.component.html',
  styleUrls: ['./my-numbers.component.css']
})
export class MyNumbersComponent implements OnInit {
  public numbers = [1, 5, 10, 25]
  constructor() { }

  ngOnInit(): void {
  }
numbersString() {}
}
