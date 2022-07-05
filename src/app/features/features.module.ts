import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module'
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { SliderComponent } from './pages/home/slider/slider.component';
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { HomeComponent } from './pages/home/home.component';
import { OrganizationFormComponent } from "./pages/backoffice/organization-form/organization-form.component";
import { MembersFormComponent } from './pages/members/members-form/members-form.component';

import { NewsComponent } from './pages/news/news/news.component';
import { NewCardComponent } from './pages/news/news/new-card/new-card.component';
import { ContactFormComponent } from './pages/contribute/contact-form/contact-form.component';

import { OrganizationComponent } from './pages/backoffice/organization/organization.component';

import { ContactComponent } from './pages/contact/contact/contact.component';
import { MembersListComponent } from './pages/members/members-list/members-list.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { NewsListEditComponent } from './pages/news/news/news-list-edit/news-list-edit.component';
import { ActivityDetailComponent } from './pages/views/activities/detail/activity-detail/activity-detail.component';
import { ActivityBoxComponent } from "./pages/activities/activity-box/activity-box.component";
import { ActivitySectionComponent} from "./pages/activities/activity-section/activity-section.component";

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
    MembersFormComponent,
    NewsComponent,
    NewCardComponent,
    HomeComponent,
    SliderComponent,
    ContactComponent,
    ContactFormComponent,
    MembersListComponent,
    OrganizationFormComponent,
    MembersFormComponent,
    CategoriesComponent,
    ActivityDetailComponent,
    ActivityBoxComponent,
    ActivitySectionComponent,
    OrganizationComponent,
    CategoriesComponent,
    NewsListEditComponent
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
    RouterModule,
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
