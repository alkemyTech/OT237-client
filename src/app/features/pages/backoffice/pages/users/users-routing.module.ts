import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: "user",component: UserFormComponent},
  {path: "list",component: ListUsersComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
