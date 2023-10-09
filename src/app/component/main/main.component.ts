import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  /* attributes */
  products:Product[]|undefined;
  serverError:any;

  /* constructor */
  constructor(private productService:ProductService) {}

  /* oninit method */
  ngOnInit():void {

    this.productService.getProducts()
      .subscribe({
        next: response => this.products = response,
        error: e => this.serverError = e.message
      })
  }

}
