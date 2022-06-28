import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module'
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { OrganizationFormComponent } from "./pages/backoffice/organization-form/organization-form.component";
import { ProjectsFormComponent } from "./pages/projects/projects-form/projects-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MembersFormComponent } from './pages/members/members-form/members-form.component';
import { MembersListComponent } from './pages/members/members-list/members-list.component';

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    MembersListComponent,
    OrganizationFormComponent,
    MembersFormComponent,
    ProjectsFormComponent,
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    ProjectsFormComponent,
    RouterModule
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    RouterModule, 
    CKEditorModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FeaturesModule {}
