import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {ProductModel} from "../../../../models/ProductModel";
import {MatIconModule} from "@angular/material/icon";
import {ProductService} from "../../../../services/product.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'TableSheet',
  standalone: true,
  imports: [CommonModule, MatListModule, MatLineModule, MatIconModule,HttpClientModule],
  providers: [ProductService],
  template: `
    <mat-nav-list>
      <a mat-list-item>
        <span matListItemIcon> <mat-icon fontIcon="edit"/></span>
        <span matListItemTitle> Edit {{product.name}} </span>
      </a>

      <a mat-list-item (click)="deleteProduct()">
        <span matListItemIcon><mat-icon fontIcon="delete"/></span>
        <span matListItemTitle>Delete {{product.name}}</span>
      </a>

    </mat-nav-list>
  `,
  styles: []
})
export class TableSheetComponent {
  product: ProductModel = {id: "1", name: "", quantity: 1}

  constructor(private productService: ProductService, private _bottomSheetRef: MatBottomSheetRef<TableSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.product = data
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product)
  }
}
