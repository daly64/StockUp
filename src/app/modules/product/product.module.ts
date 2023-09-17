import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductService} from "./services/product.service";
import {ProductRoutingModule} from "./product-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AddProductDialogComponent} from "./ui/pages/elements/add-product-dialog/add-product-dialog.component";
import {ProductsListComponent} from "./ui/pages/elements/products-list/products-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatIconModule} from "@angular/material/icon";
import {TableSheetComponent} from "./ui/pages/elements/table-sheet/table-sheet.component";
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";
import {ProductEditPageComponent} from "./ui/pages/product-edit-page/product-edit-page.component";
import {ProductsPageComponent} from "./ui/pages/products-page/products-page.component";
import { ProductAddPageComponent } from './ui/pages/product-add-page/product-add-page.component';


@NgModule({
  declarations: [
    AddProductDialogComponent,
    ProductsListComponent,
    TableSheetComponent,
    ProductEditPageComponent,
    ProductsPageComponent,
    ProductAddPageComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatBottomSheetModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatLineModule,
  ],
  providers: [ProductService]
})
export class ProductModule {
}
