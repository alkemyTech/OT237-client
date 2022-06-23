import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";

const routes: Routes = [
  { 
    path: "login", 
    component: LoginFormComponent 
  },
  {
    path: "actividades", 
    component: ActivityFormComponent
  },
  { 
    path: "registro", 
    component: RegisterFormComponent
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
