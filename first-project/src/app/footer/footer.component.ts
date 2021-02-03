import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <input [(ngModel)] = "name" type="text"> <br>
  <input [(ngModel)] = "password" type="password">
  <button class="btn btn-success" type="button" (click) = "goPassworToConsole()">davachirot aqana</button>
  <h1>Hello {{name}} </h1>
  <div class="container" *ngIf="toSeeElement; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
  <h2>Veluri Dasavleti</h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>hidden in this time</h2>
  </ng-template>
  <div [ngSwitch] = "color">
    <div *ngSwitchCase="'red'">You picked red color</div>
    <div *ngSwitchCase="'blue'">You picked blue color</div>
    <div *ngSwitchCase="'black'">You picked black color</div>
    <div *ngSwitchCase="'yellow'">You picked yallow color</div>
    <div *ngSwitchDefault>Pick again, it is not corect color</div>
  </div>
  <div class="container" *ngFor="let item of colors; index as i">
   
    <p>{{i}}  {{item}}</p>
    
  </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  public name ="";
  public password = "";
  toSeeElement = true;
  public color = "yavisperi";
  public colors = ["red", "blue", "black", "yellow"]
  constructor() { }


  ngOnInit(): void {
  }
goPassworToConsole(){
  console.log(this.password);
}

}
