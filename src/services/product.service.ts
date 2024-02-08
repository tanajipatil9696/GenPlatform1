import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http : HttpClient) { }

  getProducts(): Observable<any> {
    // Replace 'http://example.com/api/data' with your backend API endpoint
    return this.http.get<any>('http://localhost:3000/products/getproducts');
  }

  addProduct(data: any): Observable<any> {
    // Replace 'http://example.com/api/data' with your backend API endpoint
    return this.http.post<any>('http://localhost:3000/products/addproduct', data);
  }

}
