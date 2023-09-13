import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ToolbarTitleComponent} from "./toolbar-title/toolbar-title.component";

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
      </mat-toolbar-row>

    </mat-toolbar>
  `,
  styles: [`
    .example-spacer {
      flex: 1 1 auto;

    }`]
})
export class NavBarComponent {
  @Input()
  title: string = "";
}
