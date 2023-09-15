import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'appAddProductDialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButtonModule, MatInputModule],
  template: `
      <mat-card class="example-full-width">
          <mat-card-header>
              <mat-card-title>Add Product</mat-card-title>
          </mat-card-header>
        <mat-card-content>
          <form class="example-form">
            <mat-form-field class="example-full-width">
              <mat-label>Product Name</mat-label>
              <input matInput />
            </mat-form-field>
<br>
            <mat-form-field class="example-full-width">
              <mat-label>Quantity</mat-label>
              <input matInput  type="number"/>
            </mat-form-field>
          </form>
        </mat-card-content>
          <mat-card-actions>
              <button mat-button>Add</button>
              <button mat-button (click)="close()">Cancel</button>
          </mat-card-actions>
      </mat-card>
  `,
  styles: [`

      .example-form {
          min-width: 150px;
          max-width: 500px;
          width: 100%;
      }

      .example-full-width {
          width: 100%;
      }`]
})
export class AddProductDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
