import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ProductModel} from "../../../../models/ProductModel";
import {MatIconModule} from "@angular/material/icon";

import {TableSheetComponent} from "../table-sheet/table-sheet.component";
import {MatBottomSheet, MatBottomSheetModule,} from '@angular/material/bottom-sheet';
import {ProductService} from "../../../../services/product.service";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'productsList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatBottomSheetModule, MatIconModule, HttpClientModule],
  providers: [ProductService],
  template: `

    <table [dataSource]="data" class="mat-elevation-z0 list" mat-table>
      <ng-container matColumnDef="{{columnsToDisplay[0]}}">
        <th *matHeaderCellDef mat-header-cell> {{columnsToDisplay[0]}}</th>
        <td (click)="openBottomSheet(element)" *matCellDef="let element" mat-cell> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="{{columnsToDisplay[1]}}">
        <th *matHeaderCellDef mat-header-cell> {{columnsToDisplay[1]}}</th>
        <td (click)="openBottomSheet(element)" *matCellDef="let element" mat-cell> {{element.quantity}} </td>
      </ng-container>


      <tr *matHeaderRowDef="columnsToDisplay" mat-header-row></tr>
      <tr *matRowDef="let row; columns: columnsToDisplay;" mat-row></tr>
    </table>
  `,
  styles: [`
    .list {
      width: 95%;
      max-height: 95%;
    }`],
})
export class ProductsListComponent implements OnInit {
  data: Array<ProductModel>

  columnsToDisplay = ['product name', 'quantity'];

  constructor(private _bottomSheet: MatBottomSheet, private productService: ProductService) {
  }

  openBottomSheet(element: ProductModel): void {
    this._bottomSheet.open(TableSheetComponent, {data: element});
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.data = data as Array<ProductModel>,
      error: (err) => console.log(err)
    })
  }
}
