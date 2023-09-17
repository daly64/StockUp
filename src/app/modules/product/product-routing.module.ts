import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "./ui/pages/products-page/products-page.component";
import {ProductAddPageComponent} from "./ui/pages/product-add-page/product-add-page.component";

const routes: Routes = [
  {path: "", component: ProductsPageComponent},
  {path: "addProduct", component: ProductAddPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
