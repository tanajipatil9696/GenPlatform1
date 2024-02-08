import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Fetch products from the service when the component initializes
    this.productService.getProducts().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.products = data;
    });
  }

  addProduct(): void {
    // Add new product to the list and clear the form
    this.products.push({ name: this.newProduct.name, price: this.newProduct.price });
    this.newProduct.name = '';
    this.newProduct.price = 0;
  }
}
