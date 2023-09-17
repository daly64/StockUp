import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {ProductModel} from "../../../../models/ProductModel";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'TableSheet',
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
