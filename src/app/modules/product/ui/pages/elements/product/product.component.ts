import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      product works!
    </p>
  `,
  styles: [
  ]
})
export class ProductComponent {

}
