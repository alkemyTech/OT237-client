import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from "./pages/contact/contact/contact.component";
import { ContactFormComponent } from "../shared/components/contact-form/contact-form.component";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";

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
    path: "backoffice/slide",
    component: SlidesFormComponent
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "backoffice/home",
    component: SlidesFormComponent
  },
  {
    path: "backoffice",
    component: BackofficeComponent
    // path: "backoffice/users",   TIENE QUE ESTAR EL BACKOFFICE USER
    // component: ListUsersComponent
  },
  {
    path: "auth",
    loadChildren:() => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "backoffice/user",
    loadChildren:() => import('./pages/backoffice//pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: "backoffice/organization",
    loadChildren:() => import('./pages/backoffice/pages/organizations/organization.module').then(m => m.OrganizationModule)
  },
  {
    path: "backoffice/testimonio",
    loadChildren:() => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  {
    path: "novedades",
    loadChildren:() => import('./pages/backoffice//pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: "backoffice/news",

    loadChildren:() => import('./pages/backoffice//pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: "backoffice/members",
    loadChildren:() => import('./pages/backoffice//pages/members/members.module').then(m => m.MembersModule)
  },
  {
    path: "backoffice/actividades",
    loadChildren:() => import('./pages/backoffice/pages/activities/activities.module').then(m => m.ActivitiesModule)
  },
  {

    path: "backoffice/categories",
    loadChildren:() => import('./pages/backoffice/pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: "donation",
    loadChildren:() => import('./pages/donation/donation.module').then(m => m.DonationModule)
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
