import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { SlidesFormComponent } from './pages/slides/slides-form/slides-form.component';
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { OrganizationFormComponent } from "./pages/backoffice/organization-form/organization-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { ContactFormComponent } from "./pages/contribute/contact-form/contact-form.component";
import { MembersFormComponent } from "./pages/members/members-form/members-form.component";
import { NewsComponent } from "./pages/news/news/news.component";
import { OrganizationComponent } from "./pages/backoffice/organization/organization.component";
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";
import { CategoriesComponent } from "./pages/categories/categories/categories.component";
import { NewsListEditComponent } from './pages/news/news/news-list-edit/news-list-edit.component';

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
    path: "novedades",
    component: NewsComponent
  },
  {
    path: "backoffice/organization/:id",
    component: OrganizationComponent
  },
  {
    path: "contacto",
    component: ContactComponent
  },
  {
    path: "backoffice/news",
    component: NewsListEditComponent
  },
  {
    path: "backoffice/news/create",
    component: NewsFormComponent 
  },
  {
    path: "backoffice/news/:id",
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
    path: "Home",
    component: HomeComponent,
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
    path: "actividades", 
    component: ActivityFormComponent 
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
