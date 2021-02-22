import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {
show: boolean = false;
becouse: string = "";
studentName:string = "";
studentLastName: string = "";
studentEmail: string = "";
studentAge: number = 0;
studentGpi: number = 0;
cities: string[]= [];
studentId: number = 0;
cityArray: string[] = ["Kutaisi", "Tiflis", "Batumi"];
candidantArray: any = [
  {id: 1,name: "saba", lastName: "kochlamazashvili", age: 23, email: "saabkochla@gmail.com", gpi: 3, city: "tbilisi"},
  {id: 2, name: "lado", lastName: "kuchuxidze", age: 33, email: "shikolado@gmail.com", gpi: 3.5, city: "kutaisi"},
  {id: 3, name: "jora", lastName: "areshidze", age: 43, email: "abjora@yahoo.ru", gpi: 4, city: "martvili"}
]

  constructor() { }

  ngOnInit(): void {
  }
addNewStudent(){
  if(this.studentName == ""){
    this.show = true;
    this.becouse = "please write name"

  }
else if(this.studentAge == 0){
  this.show = true;
  this.becouse = "are you kidding me, then when you grow up come back"
}
else if(this.studentEmail.indexOf("@") == -1 && this.studentEmail.indexOf(".")== -1){
  this.show = true;
  this.becouse = "this mail is not valid"
}
else if(this.studentLastName == ""){
  this.show = true;
  this.becouse = " please write corect lastname"
} else {
  this.candidantArray.push({id: this.studentId, name: this.studentName, lastName: this.studentLastName, age: this.studentAge, email: this.studentEmail, gpi: this.studentGpi, city: this.cities});
}
}
clearEvrithing(){
  this.candidantArray= [{}];
}
}
