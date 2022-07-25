import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module'
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SliderComponent } from './pages/home/slider/slider.component';
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { HomeComponent } from './pages/home/home.component';
import { ListUsersComponent } from './pages/backoffice/pages/users/list-users/list-users.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { ActivityDetailComponent } from './pages/views/activities/detail/activity-detail/activity-detail.component';
import { ActivityBoxComponent } from "./pages/backoffice/pages/activities/activity-box/activity-box.component";
import { ActivitySectionComponent} from "./pages/backoffice/pages/activities/activity-section/activity-section.component";
import { NewDetailComponent } from "./pages/views/news/detail/new-detail.component";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NewsListEditComponent } from "./pages/backoffice/pages/news/news/news-list-edit/news-list-edit.component";
import { CategoriesFormComponent } from "./pages/backoffice/pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/backoffice/pages/news/news-form/news-form.component";
import { UserFormComponent } from "./pages/backoffice/pages/users/user-form/user-form.component";
import { MembersFormComponent } from "./pages/backoffice/pages/members/members-form/members-form.component";
import { NewsComponent } from "./pages/backoffice/pages/news/news/news.component";
import { NewCardComponent } from "./pages/backoffice/pages/news/news/new-card/new-card.component";
import { MembersListComponent } from "./pages/backoffice/pages/members/members-list/members-list.component";
import { OrganizationFormComponent } from "./pages/backoffice/pages/organizations/organization-form/organization-form.component";
import { CategoriesComponent } from "./pages/backoffice/pages/categories/categories/categories.component";
import { OrganizationComponent } from "./pages/backoffice/pages/organizations/organization/organization.component";
import { DonationComponent } from "./pages/donation/donation/donation.component";
import { ThanksComponent } from "./pages/donation/thanks/thanks.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card"; 


@NgModule({
  declarations: [
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
    ListUsersComponent,
    ContactComponent,
    MembersListComponent,
    OrganizationFormComponent,
    MembersFormComponent,
    CategoriesComponent,
    ActivityDetailComponent,
    ActivityBoxComponent,
    ActivitySectionComponent,
    OrganizationComponent,
    CategoriesComponent,
    NewsListEditComponent,
    NewDetailComponent,
    DonationComponent,
    ThanksComponent
  ],
  exports: [
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
    SharedModule,
    HttpClientModule,
    LeafletModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    // MatTableModule  pregunatr
  ]
})
export class FeaturesModule {}
