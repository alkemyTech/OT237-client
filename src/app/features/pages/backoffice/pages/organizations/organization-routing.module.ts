import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesSectionBackofficeComponent } from '../../activities-section-backoffice/activities-section-backoffice.component';
import { ActivityFormComponent } from '../activities/activity-form/activity-form.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationComponent } from './organization/organization.component';



const routes: Routes = [

{path: "",component: OrganizationFormComponent},
{path: ":id",component: OrganizationComponent},
{path: "activities", component: ActivitiesSectionBackofficeComponent},
{path: "activities/:id", component: ActivityFormComponent},
{path: "activities/create", component: ActivityFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
