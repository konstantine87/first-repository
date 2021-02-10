import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-animals',
  templateUrl: './table-animals.component.html',
  styleUrls: ['./table-animals.component.css']
})
export class TableAnimalsComponent implements OnInit {
  public animals=[
    {"name": "tiger", "weight": 220, "livingArea": "Azia"},
    {"name": "panda", "weight": 400, "livingArea": "China"},
    {"name": "rabbit", "weight": 2, "livingArea": "whole-world"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
