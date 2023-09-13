import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navBar [title]="title"/>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'StockUp';
}
