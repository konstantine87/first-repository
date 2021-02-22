import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {
   carForm = new FormGroup({
   nameControl: new FormControl(''),
   idControl: new FormControl(''),
   yearControl: new FormControl(''),
   colorControl: new FormControl('')
});
changeYear: number = 0;
showText: string = "";
show: boolean = false;
errorString: string = "";
  colorArray: string[] = ["blue", "black", "brown", "yellow"];
  carArray: any = [
    {id: 1, name: "Honda", year: 2011, color: "black"},
    {id: 2, name: "Bmw", year: 2013, color: "brown"},
    {id: 3, name: "Suzuki", year: 2016, color: "blue"},
    {id: 4, name: "Ferrari", year: 2019, color: "red"}
  
  ]

  constructor() {
  
   }

  ngOnInit(): void {
    this.carForm.patchValue({
      idControl: 5
    })
  }
addCar(){
  let car = this.carForm.value;
  let model = car.nameControl;
  let year = car.yearControl;
  if(model.length < 4 || model.length > 10){
this.show = true;
this.errorString = "write legal name please, we are not from China";
  } else if(year < 1984 || year > 2022){
    this.show = true;
    this.errorString = "This year are not legal, please choose year between 1984-2021"
  }else{
  this.carArray.push({id: car.idControl, name: car.nameControl, year: car.yearControl, color: car.colorControl});
  this.show = false;
}
this.carForm.patchValue({
  idControl: car.idControl + 1
})
}
delete(id: any){
  let deleteItem = this.carArray.findIndex((e: any)  => e.id == id);
  console.log(deleteItem);
  this.carArray.splice(deleteItem, 1);
}


}
