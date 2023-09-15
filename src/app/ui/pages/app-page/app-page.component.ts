import { Component } from '@angular/core';

@Component({
  selector: 'App',
  template: `
    <navBar [title]="title"/>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AppPageComponent {
  title = 'StockUp';
}
