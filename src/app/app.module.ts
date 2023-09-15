import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductModule} from "./modules/product/product.module";
import { AppPageComponent } from './ui/pages/app-page/app-page.component';
import {NavBarComponent} from "./ui/pages/elements/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavBarComponent,
        ProductModule,
        NavBarComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
