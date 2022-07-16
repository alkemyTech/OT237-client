import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersFormComponent } from './members-form/members-form.component';
import { MembersListComponent } from './members-list/members-list.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "backoffice/members",component: MembersListComponent},
      {path: "backoffice/members/create",component: MembersFormComponent},
      {path: "backoffice/members/edit/:id",  component: MembersFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
