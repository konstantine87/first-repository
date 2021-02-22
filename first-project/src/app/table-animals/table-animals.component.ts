import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-animals',
  templateUrl: './table-animals.component.html',
  styleUrls: ['./table-animals.component.css']
})
export class TableAnimalsComponent implements OnInit {
  animalName: string = "";
  animalWeight: number = 0;
  animalLivingArea: string = "";
  link: string = "";
  public animals=[
    {name: "tiger", weight: 220, livingArea: "Azia", link: "tiger"},
    {name: "panda", weight: 400, livingArea: "China", link: "panda"},
    {name: "rabbit", weight: 2, livingArea: "whole-world"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
addNewAnimal(){
 
 let lastDecision = this.animals.push({name: this.animalName, weight: this.animalWeight, livingArea: this.animalLivingArea});

  
 }
 
}


