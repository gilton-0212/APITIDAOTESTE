import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [

  {path: 'user', component: UserListComponent},
  {path: 'user/form', component: UserFormComponent },
  {path: 'user/edit/:id', component: UserUpdateComponent},
  {path: 'user/delete/:id', component: UserDeleteComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutes{}
