import {Component, Input} from '@angular/core';

@Component({
  selector: 'NavBarTitle',
  template: `
    <mat-icon class="mat-icon">shelves</mat-icon>

    <span>{{title}}</span>
  `,
  styles: [`
    mat-icon {
      padding-left: 10px;
      padding-right: 10px;
      font-size: 25px;
      display: inline-flex;
    }

    span {
      font-size: 20px;
      letter-spacing: 2px;
      font-family: Roboto, sans-serif;
    }
  `]
})
export class NavBarTitleComponent {
  @Input()
  title: string = ''

}
