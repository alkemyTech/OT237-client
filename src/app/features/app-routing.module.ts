import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent 
  },  
  {
    path: "Slides",
    component: SlidesFormComponent
  },
  {
    path: "Slides/:id",
    component: SlidesFormComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
   },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
