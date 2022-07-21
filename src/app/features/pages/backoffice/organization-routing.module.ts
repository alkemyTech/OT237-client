import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationComponent } from './organization/organization.component';
import { ActivitiesSectionBackofficeComponent} from './activities-section-backoffice/activities-section-backoffice.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';


const routes: Routes = [
	{path: "organization/edit",component: OrganizationFormComponent},
	{path: "organization/:id",component: OrganizationComponent},
	{path: "activities", component: ActivitiesSectionBackofficeComponent},
	{path: "activities/:id", component: ActivityFormComponent},
	{path: "activities/create", component: ActivityFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
