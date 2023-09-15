import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsListComponent} from "../elements/products-list/products-list.component";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  template: `
      <productsList/>
  `,
  styles: []
})
export class ProductsPageComponent {

}
