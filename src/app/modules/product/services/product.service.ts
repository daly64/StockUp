import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url = 'https://stockup-api.onrender.com/products'
  Products: WritableSignal<ProductModel[]> = signal([])

  constructor(private httpClient: HttpClient) {
    this.updateProductsList()
  }

  updateProductsList() {
    this.getAllProducts().subscribe(value => this.Products.set(value))
  }

  getAllProducts() {
    return this.httpClient.get<ProductModel[]>(this.Url)
  }

  getProductById(product: ProductModel) {
    return this.httpClient.get<ProductModel>(this.Url + "/id/" + product.id)
  }

  addProduct(product: ProductModel) {
    this.httpClient.post(this.Url + "/add", product, {responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})

    this.updateProductsList()

  }

  updateProduct(product: ProductModel) {
    this.httpClient.put(this.Url + "/update", product, {responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})

    this.updateProductsList()
  }

  deleteProduct(product: ProductModel) {
    this.httpClient.delete(this.Url + "/delete", {body: product, responseType: 'text'})
      .subscribe({next: response => console.log(response), error: err => console.log(err)})

    this.updateProductsList()
  }


}
