import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-order',
  imports: [CommonModule, FormsModule, ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  categories : ICategory[];
  selectedCatId: number=0;
  receviedTotalPrice:number=0;
 @ViewChild('username') myInput!:ElementRef;

  constructor() {
    this.categories =[
      {id:1,name:"Laptops"},
      {id:2,name:"Aipad"}
    ]
  }
  ngAfterViewInit(): void {
   console.log(this.myInput);
  }

  calacTotalPrice(totalPrice:number){
  this.receviedTotalPrice = totalPrice;
  }

}
