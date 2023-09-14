import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ProductModel} from "../../../../models/ProductModel";
import {MatIconModule} from "@angular/material/icon";

import {TableSheetComponent} from "../table-sheet/table-sheet.component";
import {MatBottomSheet, MatBottomSheetModule,} from '@angular/material/bottom-sheet';

const ELEMENT_DATA: ProductModel[] = [
  {id: 1, name: 'Hydrogen', quantity: 1},
  {id: 2, name: 'Helium', quantity: 1},
  {id: 3, name: 'Lithium', quantity: 1},
  {id: 4, name: 'Beryllium', quantity: 1},
  {id: 5, name: 'Boron', quantity: 1},
  {id: 6, name: 'Carbon', quantity: 1},
  {id: 7, name: 'Nitrogen', quantity: 1},
  {id: 8, name: 'Oxygen', quantity: 1},
  {id: 9, name: 'Fluorine', quantity: 1},
  {id: 10, name: 'Neon', quantity: 1},
];

@Component({
  selector: 'productsList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatBottomSheetModule, MatIconModule],
  template: `
      <div class="main">

          <table [dataSource]="data" class="mat-elevation-z7 table" mat-table>
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
          <!--        (click)="openBottomSheet()"-->

      </div>
  `,
  styles: [`
      .main {
          margin: 10px;
          display: flex;
          flex-direction: row;
          justify-content: center;
      }

      .table {
          min-width: 85%;
      }


  `],
})
export class ProductsListComponent {
  data = ELEMENT_DATA
  columnsToDisplay = ['product name', 'quantity'];

  constructor(private _bottomSheet: MatBottomSheet) {
  }

  openBottomSheet(element: ProductModel): void {
    this._bottomSheet.open(TableSheetComponent, {data: element});
  }
}
