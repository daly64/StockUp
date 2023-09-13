import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAuthService} from "./services/user-auth.service";
import {UserService} from "./services/user.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UserAuthService,UserService]
})
export class UserModule { }
