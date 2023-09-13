import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "../services/user.service";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

let fakeUsers =
  [
    {name: "user1", email: "email1", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user2", email: "email2", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user3", email: "email3", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user4", email: "email4", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user5", email: "email5", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user6", email: "email6", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user7", email: "email7", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user8", email: "email8", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user9", email: "email9", photoURL: "url", isAdmin: false, isLogin: false},
    {name: "user10", email: "email10", photoURL: "url", isAdmin: false, isLogin: false},
  ]

@Component({
  selector: 'usersList',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  template: `

    <button (click)="saveAllFakeUsers()" color="primary" mat-raised-button>addFakeUsers</button>


    <table [dataSource]="dataSource" mat-table>

      <!-- id Column -->
      <ng-container matColumnDef="id">
        <th *matHeaderCellDef mat-header-cell> Id</th>
        <td *matCellDef="let user" mat-cell> {{user.id}} </td>
      </ng-container>

      <!-- name Column -->
      <ng-container matColumnDef="name">
        <th *matHeaderCellDef mat-header-cell> Name</th>
        <td (click)="deleteSelectedUser(user)" *matCellDef="let user" mat-cell> {{user.name}} </td>
      </ng-container>

      <!-- email Column -->
      <ng-container matColumnDef="email">
        <th *matHeaderCellDef mat-header-cell> email</th>
        <td *matCellDef="let user" mat-cell> {{user.email}} </td>
      </ng-container>

      <!-- isLogin Column -->
      <ng-container matColumnDef="isLogin">
        <th *matHeaderCellDef mat-header-cell> isLogin</th>
        <td *matCellDef="let user" mat-cell> {{user.isLogin}} </td>
      </ng-container>

      <!-- isAdmin Column -->
      <ng-container matColumnDef="isAdmin">
        <th *matHeaderCellDef mat-header-cell> isAdmin</th>
        <td (click)="updateUserAdmin(user)" *matCellDef="let user" mat-cell> {{user.isAdmin}} </td>
      </ng-container>


      <tr *matHeaderRowDef="displayedColumns" mat-header-row></tr>
      <tr *matRowDef="let row; columns: displayedColumns;" mat-row></tr>
    </table>


  `,
  styles: [`  `]
})
export class UsersListComponent {
  userService: UserService = inject(UserService)
  users$ = this.userService.getCollectionUser()
  displayedColumns: string[] = ['id', 'name', 'email', 'isLogin', 'isAdmin'];
  dataSource = this.users$;

  saveAllFakeUsers() {
    fakeUsers.forEach(user => this.userService.addUser(user))
  }

  updateUserAdmin(user: any) {
    user.isAdmin = !user.isAdmin
    this.userService.updateUser(user, user.id)
  }

  deleteSelectedUser(user: any) {
    this.userService.deleteUser(user.id)

  }


}
