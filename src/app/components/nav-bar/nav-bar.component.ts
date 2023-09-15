import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ToolbarTitleComponent} from "./toolbar-title/toolbar-title.component";
import {Router} from "@angular/router";

@Component({
  selector: 'navBar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ToolbarTitleComponent,
  ],
  template: `
      <mat-toolbar color="primary">
          <mat-toolbar-row>
              <toolbarTitle [title]="title"/>
              <span class="example-spacer"></span>
              <!--        <span>{{pageName}}</span>-->
              <div [ngSwitch]="pageName">
                  <button *ngSwitchCase="'Products Page'" mat-button>
                      <mat-icon fontIcon="add" inline/>
                      New Product
                  </button>
              </div>

          </mat-toolbar-row>

      </mat-toolbar>
  `,
  styles: [`
      .example-spacer {
          flex: 1 1 auto;
      }

      span {
          font-size: 20px;
          letter-spacing: 2px;
          font-family: Roboto, sans-serif;
      }

  `]
})
export class NavBarComponent {
  @Input()
  title: string;
  pageName: string;

  constructor(private router: Router) {
    if(router.url === "/"){
      this.pageName="Products Page"
    }

  }
}
