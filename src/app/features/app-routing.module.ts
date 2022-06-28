import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { OrganizationFormComponent } from "./pages/backoffice/organization-form/organization-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";
import { CategoriesComponent } from "./pages/categories/categories/categories.component";

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

    component: ActivityFormComponent },
  
  { 
    path: "categorias/crear", 
    component: CategoriesFormComponent 
  },
  { 
     path: "categorias/crear/:id", 
    component: CategoriesFormComponent 
  },
  { 
      path: "backoffice/categories", 
     component: CategoriesComponent
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
    path: "backoffice/news",
    component: NewsFormComponent 
  },
  {
    path: "backoffice/members",
    component: MembersListComponent
  },
  {
    path: "backoffice/members/create",
    component: MembersFormComponent
  },
  { 
    path: "backoffice/members/edit/:id", 
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
