import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "./services/product.service";
import {ProductRoutingModule} from "./product-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
