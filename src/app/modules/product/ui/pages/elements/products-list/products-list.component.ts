import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../../../models/ProductModel";
import {TableSheetComponent} from "../table-sheet/table-sheet.component";
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {ProductService} from "../../../../services/product.service";
import {interval, map} from "rxjs";


@Component({
  selector: 'productsList',
  template: `
    <div *ngIf="products$ | async">
      <table [dataSource]=" products$" class="mat-elevation-z0 list" mat-table>
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
    </div>
  `,
  styles: [`
    .list {
      width: 95%;
      max-height: 95%;
    }`],
})
export class ProductsListComponent implements OnInit {
  // data$: Observable<ProductModel[]> = this.productService.getAllProducts()
  columnsToDisplay = ['product name', 'quantity'];

  products$ = interval(100).pipe(
    map(() => {
      return this.productService.getAllProducts()
    }),
  )

  constructor(private _bottomSheet: MatBottomSheet, private productService: ProductService) {
  }

  openBottomSheet(element: ProductModel): void {
    this._bottomSheet.open(TableSheetComponent, {data: element});
  }


  ngOnInit(): void {

    /*    this.productService.getAllProducts().subscribe({
          next: (data) => this.data = data as Array<ProductModel>,
          error: (err) => console.log(err)
        })*/
  }


}
