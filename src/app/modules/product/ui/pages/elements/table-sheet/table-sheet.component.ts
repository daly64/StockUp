import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {ProductModel} from "../../../../models/ProductModel";
import {ProductService} from "../../../../services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateProductDialogComponent} from "../update-product-dialog/update-product-dialog.component";

@Component({
  selector: 'TableSheet',
  template: `
    <mat-nav-list>
      <a mat-list-item (click)="updateProduct()">
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
  product: ProductModel

  constructor(private productService: ProductService, private bottomSheetRef: MatBottomSheetRef<TableSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    , public dialog: MatDialog) {
    this.product = data
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product)
    this.bottomSheetRef.dismiss()
  }

  updateProduct() {
    this.dialog.open(UpdateProductDialogComponent, {data: this.product});
    this.bottomSheetRef.dismiss()
  }
}
