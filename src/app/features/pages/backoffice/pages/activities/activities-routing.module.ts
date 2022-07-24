import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitySectionComponent } from './activity-section/activity-section.component';
import { ActivitiesSectionBackofficeComponent} from "./activities-section-backoffice/activities-section-backoffice.component";
import { ActivityDetailComponent } from '../../../views/activities/detail/activity-detail/activity-detail.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "",component: ActivitySectionComponent},
      {path: "list",component: ActivitiesSectionBackofficeComponent},
      {path: ":id", component: ActivityDetailComponent},
      {path: "edit/:id", component: ActivityFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
