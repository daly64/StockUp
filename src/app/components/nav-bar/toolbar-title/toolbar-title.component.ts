import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'toolbarTitle',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
      <mat-icon class="mat-icon" >shelves</mat-icon>

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
export class ToolbarTitleComponent {
  @Input()
  title: string = ''

}
