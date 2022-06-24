import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  { 
    path: "registro", 
    component: RegisterFormComponent },
  { 
    path: "backoffice/members/edit", 
    component: MembersFormComponent },
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
