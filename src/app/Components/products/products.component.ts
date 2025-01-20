import { Component, EventEmitter, Input, OnChanges, Output, output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cardDirective } from '../../directives/card.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,cardDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  filteredProducts : IProduct[];
  @Input() receiveCategoryId:number =0;
  TotalPrice: number=0;

  @Output()onTotalPriceChanged : EventEmitter<number>

  constructor(private _staticProducts: StaticProductsService){

    this.onTotalPriceChanged = new EventEmitter<number>();

    this.filteredProducts = _staticProducts.getAllProducts();
  }

  Buy(count:number,price:number){

    this.TotalPrice+= price * count;
   this.onTotalPriceChanged.emit(this.TotalPrice);
  }
  ngOnChanges(){
    this.filteredProducts= this._staticProducts.getProductsByCategoryId(this.receiveCategoryId);
  }


}
