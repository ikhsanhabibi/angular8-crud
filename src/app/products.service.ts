import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private url: string = "http://localhost:4000/products";

  constructor(private http: HttpClient) {}

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http
      .post(`${this.url}/add`, obj)
      .subscribe(res => console.log("Product succesfully added."));
  }

  getProducts() {
    return this.http.get(`${this.url}`);
  }

  editProduct(id) {
    return this.http.get(`${this.url}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log("Product succesfully updated."));
  }

  deleteProduct(id) {
    return this.http.get(`${this.url}/delete/${id}`);
  }
}
