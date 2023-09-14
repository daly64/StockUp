import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {ProductModel} from "../../../../models/ProductModel";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'TableSheet',
  standalone: true,
  imports: [CommonModule, MatListModule, MatLineModule, MatIconModule],
  template: `
      <mat-nav-list>
          <a mat-list-item>
              <span matListItemTitle> <mat-icon color="primary" fontIcon="edit"/> Edit Product</span>
              <span matLine>edit {{product.name}}</span>
          </a>

          <a mat-list-item>
              <span matListItemTitle><mat-icon color="warn" fontIcon="delete"/>Delete Product</span>
              <span matLine>delete  {{product.name}}</span>
          </a>

      </mat-nav-list>
  `,
  styles: []
})
export class TableSheetComponent {
  product: ProductModel = {id: 1, name: "kkk", quantity: 1}

  constructor(private _bottomSheetRef: MatBottomSheetRef<TableSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.product = data
  }
}
