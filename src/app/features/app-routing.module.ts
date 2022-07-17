import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { SlidesFormComponent } from './pages/slides/slides-form/slides-form.component';
import { ListUsersComponent } from './pages/backoffice/list-users/list-users.component';
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { ContactFormComponent } from "../shared/components/contact-form/contact-form.component";

const routes: Routes = [

  {
    path: "backoffice/home",
    component: SlidesFormComponent
  },
  {
    path: "contacto",
    component: ContactComponent
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
    path: "backoffice/users",
    component: ListUsersComponent
  },
  {
    path: "auth",
    loadChildren:() => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "users",
    loadChildren:() => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: "organization",
    loadChildren:() => import('./pages/backoffice/organization.module').then(m => m.OrganizationModule)
  },
  {
    path: "testimonio",
    loadChildren:() => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: "novedades",
    loadChildren:() => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: "members",
    loadChildren:() => import('./pages/members/members.module').then(m => m.MembersModule)
  },
  {
    path: "actividades",
    loadChildren:() => import('./pages/activities/activities.module').then(m => m.ActivitiesModule)

  },
  {
    path: "categories",
    loadChildren:() => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }

];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
