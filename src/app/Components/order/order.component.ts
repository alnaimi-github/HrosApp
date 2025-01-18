import { Component } from '@angular/core';
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
export class OrderComponent {
  categories : ICategory[];
  selectedCatId: number=0;
  receviedTotalPrice:number=0;
 
  constructor() {
    this.categories =[
      {id:1,name:"Laptops"},
      {id:2,name:"Aipad"}
    ]
  }

  calacTotalPrice(totalPrice:number){
  this.receviedTotalPrice = totalPrice;
  }

}
