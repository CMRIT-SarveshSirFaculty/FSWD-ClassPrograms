import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ProductsData:any;
  constructor(public productGetApi:ProductService) {
    
  }
  ngOnInit(): void {
    this.productGetApi.getProducts().subscribe((response:any) => {
      console.log("api Called:::::::::::::", response);
      this.ProductsData = response.products;
      console.log("api array:::::::::::::", this.ProductsData);
    })
  }
}
