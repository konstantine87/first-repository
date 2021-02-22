import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 categorys: string[] = ["crocery", "drinks", "parfum", "outlet"]
 show: boolean = false;
 errorString: string = "";
 inputId: number = 0;
 

  shopForm = new FormGroup({
    idControl: new FormControl(''),
    nameControl: new FormControl(''),
    priceControl: new FormControl(''),
    suppliesControl: new FormControl(''),
    categoryControl: new FormControl('')
  })
 shopItemsArray: any = [
   {id: 1, name: "bread", price: 0.85, supplies: 1000, category: "crocery"},
   {id: 2, name: "butter", price: 6, supplies: 670, category: "crocery"},
   {id: 3, name: "meat", price: 18, supplies: 200, category: "crocery"},
   {id: 4, name: "bear", price: 2, supplies: 2500, category: "drinks"}
   
 ]
  constructor() { }
 
  ngOnInit(): void {
    this.shopForm.patchValue({
      idControl: 5
    })
  }
addItem(){
  let item = this.shopForm.value;
  if(item.priceControl <= 0 || item.priceControl > 10000){
    this.show = true;
    this.errorString = "price alweis is more then 0!!!";
  } else if (item.nameControl.length <= 0 || item.nameControl > 50){
    this.show = true;
    this.errorString = "this is not valid name"
  } else {
    let shopId = item.idControl;
    let findShop = this.shopItemsArray.findIndex((e: any) => e.id === shopId);
    if(findShop >= 0){
      let element = this.shopItemsArray.find((e: any) => e.id === shopId);
      element.id = item.idControl;
      element.name = item.nameControl;
      element.price = item.priceControl;
      element.supplies = item.suppliesControl;
      element.category = item.categoryControl;
    } else {
    this.shopItemsArray.push( {id: item.idControl, name: item.nameControl, price: item.priceControl, supplies: item.suppliesControl, category: item.categoryControl});
    this.show = false;
    }
  }
  this.shopForm.patchValue({
    idControl: item.idControl + 1
  })
}

delete(id: any){
  let idFinder = this.shopItemsArray.findIndex((aid: any) => aid.id == id);
  console.log(idFinder);
  this.shopItemsArray.splice(idFinder,1);

}
check(id: number){
  let checkArray = this.shopItemsArray.find((e: any)=> e.id == id);
  this.shopForm.patchValue({
    idControl: checkArray.id,
    nameControl: checkArray.name,
    priceControl: checkArray.price,
    suppliesControl: checkArray.supplies,
    categoryControl: checkArray.category
  });
  
  
}
}
