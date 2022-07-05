import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { SlidesFormComponent } from './pages/slides/slides-form/slides-form.component';
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
import { ContactFormComponent } from "./pages/contribute/contact-form/contact-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";
import { CategoriesComponent } from "./pages/categories/categories/categories.component";
import { ActivityDetailComponent } from './pages/views/activities/detail/activity-detail/activity-detail.component';
import { ActivitySectionComponent } from "./pages/activities/activity-section/activity-section.component";

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
    component: ActivitySectionComponent
  },
  {
    path: "actividades/:id",
    component: ActivityDetailComponent
  },
  { 
    path: "categorias/crear", 
    component: CategoriesFormComponent 
  },
  { 
     path: "categorias/crear/:id", 
    component: CategoriesFormComponent 
  },
  {
    path: "backoffice/home",
    component: SlidesFormComponent
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
    path: "contacto",
    component: ContactComponent

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
    path: "contribuir",
    component: ContactFormComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
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
    path: "backoffice/users",
    component: UserFormComponent
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
