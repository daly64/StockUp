import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {ProductModel} from "../../../../models/ProductModel";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const ELEMENT_DATA: ProductModel[] = [
  {id: 1, name: 'Hydrogen', price: 1.0079, quantity: 1},
  {id: 2, name: 'Helium', price: 4.0026, quantity: 1},
  {id: 3, name: 'Lithium', price: 6.941, quantity: 1},
  {id: 4, name: 'Beryllium', price: 9.0122, quantity: 1},
  {id: 5, name: 'Boron', price: 10.811, quantity: 1},
  {id: 6, name: 'Carbon', price: 12.0107, quantity: 1},
  {id: 7, name: 'Nitrogen', price: 14.0067, quantity: 1},
  {id: 8, name: 'Oxygen', price: 15.9994, quantity: 1},
  {id: 9, name: 'Fluorine', price: 18.9984, quantity: 1},
  {id: 10, name: 'Neon', price: 20.1797, quantity: 1},
];

@Component({
  selector: 'productsList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <div class="main">
      <mat-form-field>
        <mat-label>Filter</mat-label>
        <input matInput (keyup)="applyFilter($event)" placeholder="Ex. ium" #input>
      </mat-form-field>

      <table [dataSource]="dataSource" class="mat-elevation-z8 demo-table" mat-table>

        <ng-container matColumnDef="id">
          <th *matHeaderCellDef mat-header-cell> Id.</th>
          <td *matCellDef="let element" mat-cell> {{element.id}} </td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th *matHeaderCellDef mat-header-cell>Product Name</th>
          <td *matCellDef="let element" mat-cell> {{element.name}} </td>
        </ng-container>
        <ng-container matColumnDef="price">
          <th *matHeaderCellDef mat-header-cell> price</th>
          <td *matCellDef="let element" mat-cell> {{element.price}} </td>
        </ng-container>

        <ng-container matColumnDef="quantity">
          <th *matHeaderCellDef mat-header-cell> quantity</th>
          <td *matCellDef="let element" mat-cell> {{element.quantity}} </td>
        </ng-container>
        <ng-container matColumnDef="action">
          <th *matHeaderCellDef mat-header-cell> action</th>
          <td *matCellDef="let element" mat-cell>
            <button mat-button color="primary">
              <mat-icon>edit</mat-icon>
              edit
            </button>
            <button mat-button color="warn">
              <mat-icon>delete</mat-icon>
              delete
            </button>
          </td>
        </ng-container>

        <tr *matHeaderRowDef="displayedColumns" mat-header-row></tr>
        <tr *matRowDef="let row; columns: displayedColumns;" mat-row></tr>
      </table>


    </div>
  `,
  styles: [`
    .main {
      display: flex;
      flex-direction: column;
      margin-left: 25%;
      margin-top: 1%;
      width: 50%;
    }

    table {
      width: 100%;
    }


  `],
})
export class ProductsListComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
