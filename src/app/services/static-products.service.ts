import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
products : IProduct[];
  constructor() {
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
   }

   getAllProducts():IProduct[]
   {
      return this.products;
   }

   getProductById(id:number):IProduct|null{

    return this.products.find(prd=> prd.id ==id)?? null;
   }

   getProductsByCategoryId(catId:number):IProduct[]{
    return this.products.filter(prod=>prod.catId == catId|| catId ==0);
   }
}
