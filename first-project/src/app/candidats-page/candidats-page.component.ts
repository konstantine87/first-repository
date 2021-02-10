import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidats-page',
  templateUrl: './candidats-page.component.html',
  styleUrls: ['./candidats-page.component.css']
})
export class CandidatsPageComponent implements OnInit {
  
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = true;
  candidatsList: string = "";
  
 candidats: string[] = ["john Doe","Sulkhan kvernadze", "Varlam Saxokia"]
  
  constructor() { }

  ngOnInit(): void {
  }
  imageChange(event: any){
    let selectCandidat = event.target.value;
    if(selectCandidat == "john Doe") {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    } else if( selectCandidat == "Sulkhan kvernadze"){
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      this.show4 = false;
    } else if( selectCandidat == "Varlam Saxokia") {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
      this.show4 = false;
    } else {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = true;
    }


    
    
  }
   
} 
  

