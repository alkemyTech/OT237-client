import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { OrganizationFormComponent } from "./pages/backoffice/organization-form/organization-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { OrganizationComponent } from "./pages/backoffice/organization/organization.component";

const routes: Routes = [
  {
    path: "login", 
    component: LoginFormComponent
  },
  {
    path: "nuevo-testimonio",
    component: TestimonialFormComponent
  },
  {
    path: "editar-testimonio/:id",
    component: TestimonialFormComponent
  },
{
    path: "actividades", 
    component: ActivityFormComponent
  },
  { 
    path: "registro", 
    component: RegisterFormComponent
  },
  {
    path: "backoffice/organization/edit",
    component: OrganizationFormComponent
  },
  {
    path: "backoffice/organization/:id",
    component: OrganizationComponent
  },
  {
    path: "backoffice/news",
    component: NewsFormComponent 
  },
  { 
    path: "backoffice/members/edit", 
    component: MembersFormComponent 
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
