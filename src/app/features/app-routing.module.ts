import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "backoffice/users",
    component: UserFormComponent
  },
  { 
    path: "actividades", 
    component: ActivityFormComponent 
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
