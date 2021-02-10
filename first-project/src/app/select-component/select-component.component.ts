import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {
  selecValues: number[]=[1,2,3,4,5,6]
  selectedValue: number[] = []
  show: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  valueChange(event: any) {
   this.selectedValue = event.target.value
     this.show = true;
   }
  }


