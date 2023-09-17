import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url = 'https://stockup-api.onrender.com/products'
  products: ProductModel[]

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts() {
    // return this.httpClient.get<ProductModel[]>(this.Url)

    this.httpClient.get<ProductModel[]>(this.Url)
      .subscribe(data => this.products = data)
    return this.products

  }

  getProductById(product: ProductModel) {
    return this.httpClient.get<ProductModel>(this.Url + "/id/" + product.id)
  }

  addProduct(product: ProductModel) {
    this.httpClient.post(this.Url + "/add", product, {responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})


  }

  updateProduct(product: ProductModel) {
    this.httpClient.put(this.Url + "/update", product, {responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})
  }

  deleteProduct(product: ProductModel) {
    this.httpClient.delete(this.Url + "/delete", {body: product, responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})
  }


}
