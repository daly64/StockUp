import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../../services/product.service";
import {ProductModel} from "../../../../models/ProductModel";

@Component({
  selector: 'app-update-product-dialog',
  template: `
    <mat-card class="example-full-width">
      <mat-card-header>
        <mat-card-title>Edit Product</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form class="example-form">
          <mat-form-field class="example-full-width">
            <mat-label>Product Name</mat-label>
            <input [(ngModel)]="product.name" [ngModelOptions]="{standalone:true}" matInput
                   type="text"/>
          </mat-form-field>
          <br>
          <mat-form-field class="example-full-width">
            <mat-label>Quantity</mat-label>
            <input [(ngModel)]="product.quantity" [ngModelOptions]="{standalone:true}" matInput min="1"
                   type="number"/>
          </mat-form-field>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button (click)="updateProduct()" mat-button>Save</button>
        <button (click)="closeDialog()" mat-button>Cancel</button>
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
export class UpdateProductDialogComponent {
  product: ProductModel

  constructor(
    public dialogRef: MatDialogRef<UpdateProductDialogComponent>,
    private productService: ProductService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.product = data
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
