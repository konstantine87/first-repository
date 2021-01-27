import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-examples',
  templateUrl: './directives-examples.component.html',
  styleUrls: ['./directives-examples.component.css']
})
export class DirectivesExamplesComponent implements OnInit {
  showParagraph: boolean = true;
  books: string[] = ["book1", "book2", "book3", "book4"];
  myNums: number[] = [10, 20, 30,34, 54, 76]

  constructor() { }

  ngOnInit(): void {
  }
  hideElement(){
    this.showParagraph = false;
  }
  showMeParagraph(){
    this.showParagraph = true;
  }
}
