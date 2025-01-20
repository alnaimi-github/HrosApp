import { IProduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { CommonModule,Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
 product: IProduct | undefined;
 currentNumberId:number =0;

  constructor(private _activetedRoute: ActivatedRoute,
    private _productService:StaticProductsService,
  private _location:Location) {

  }
  ngOnInit(): void {
    this.currentNumberId = Number(this._activetedRoute.snapshot.paramMap.get('id'));
    this.product = this._productService.getProductById(this.currentNumberId)!;
  }


  goback(){
    this._location.back()
  }


}
