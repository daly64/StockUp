import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../../../services/product.service";
import {ProductModel} from "../../../../models/ProductModel";

@Component({
  selector: 'appAddProductDialog',
  template: `
    <mat-card class="example-full-width">
      <mat-card-header>
        <mat-card-title>Add Product</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <form class="example-form">
          <mat-form-field class="example-full-width">
            <mat-label>Product Name</mat-label>
            <input type="text" matInput [(ngModel)]="productName"
                   [ngModelOptions]="{standalone:true}"/>
          </mat-form-field>
          <br>
          <mat-form-field class="example-full-width">
            <mat-label>Quantity</mat-label>
            <input matInput type="number" min="1" [(ngModel)]="productQuantity"
                   [ngModelOptions]="{standalone:true}"/>
          </mat-form-field>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="addProduct()">Add</button>
        <button mat-button (click)="closeDialog()">Cancel</button>
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
  productName: string
  productQuantity: number = 1

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    private productService: ProductService) {
  }

  addProduct() {
    let newProduct: ProductModel = {name: this.productName, quantity: this.productQuantity}
    this.productService.addProduct(newProduct)
    this.productService.getAllProducts()
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
