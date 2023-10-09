import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* API endpoints */
const PRODUCTS_GET_API:string = "http://localhost:3000/products"

/* methods */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  /* method for products list */
  public getProducts():Observable<Product[]> {

    return this.http.get<Product[]>(PRODUCTS_GET_API);
  }

}
