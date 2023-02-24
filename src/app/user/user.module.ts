import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { UserRoutes } from './user.routing';
import { FormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    UserRoutes,
    FormsModule

  ],

  exports:[],

  declarations:[
    UserFormComponent,
    UserListComponent,
    UserUpdateComponent,
    UserDeleteComponent

  ],

  providers: [UserService]

})

export class UserModule{}
