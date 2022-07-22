import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityDetailComponent } from '../../../views/activities/detail/activity-detail/activity-detail.component';
import { ActivitySectionComponent } from './activity-section/activity-section.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "",component: ActivitySectionComponent},
      {path: "actividades/:id",component: ActivityDetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
