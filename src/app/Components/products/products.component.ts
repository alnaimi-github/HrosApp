import { Component, EventEmitter, Input, OnChanges, Output, output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { cardDirective } from '../../directives/card.directive';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,cardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  products: IProduct[];
  filteredProducts : IProduct[];
  @Input() receiveCategoryId:number =0;
  TotalPrice: number=0;
  
  @Output()onTotalPriceChanged : EventEmitter<number>

  constructor(){
  
    this.onTotalPriceChanged = new EventEmitter<number>();
    this.products =[
      {
        id: 100, name: "Laptops", price: 400, quentity: 5, imgUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
        catId: 1
      },
      {
        id: 100, name: "Aipad", price: 400, quentity: 2, imgUrl: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
        catId: 2
      }
    ]

  

    this.filteredProducts = this.products;
  }

  Buy(count:number,price:number){

    this.TotalPrice+= price * count;
   this.onTotalPriceChanged.emit(this.TotalPrice);
  }
  ngOnChanges(){
    this.filteredProducts= this.products.filter(prod => prod.catId == this.receiveCategoryId|| this.receiveCategoryId==0);
  }


}
