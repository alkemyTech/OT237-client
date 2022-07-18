import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
{path: "backoffice/organization/edit",component: OrganizationFormComponent},
{path: "backoffice/organization/:id",component: OrganizationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
