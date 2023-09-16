import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {NavBarTitleComponent} from "./toolbar-title/navbar-title.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {
  AddProductDialogComponent
} from "../../../../modules/product/ui/pages/elements/add-product-dialog/add-product-dialog.component";

@Component({
  selector: 'navBar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NavBarTitleComponent,
    MatDialogModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <NavBarTitle [title]="title"/>
        <span class="example-spacer"></span>
        <!--        <span>{{pageName}}</span>-->
        <div [ngSwitch]="pageName">
          <button *ngSwitchCase="'Products Page'" (click)="openDialog()" mat-button>
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

  constructor(private router: Router, public dialog: MatDialog) {
    if (router.url === "/") {
      this.pageName = "Products Page"
    }
  }

  openDialog(): void {
    this.dialog.open(AddProductDialogComponent);
  }
}
