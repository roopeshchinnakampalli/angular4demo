import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

import { CatalogService } from './services/catalog.service';


@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',

  
})
export class ProductsComponent implements OnInit  {
  
  products: Product[];
  
  selectedProduct: Product;

  catalog = {};

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

constructor(private productService: ProductService,private router: Router, 
  private catalogService: CatalogService) {

}

getProducts(): void {
  this.productService.getProducts().then(products => this.products = products);
}

ngOnInit(): void {
  this.getProducts();
  this.catalogService.getContainerData().subscribe(catalogData => this.catalog = catalogData);
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedProduct.id]);
}

}



