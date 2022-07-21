import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { OrganizationRoutingModule } from './organization-routing.module';
import { ActivitiesSectionBackofficeComponent } from './activities-section-backoffice/activities-section-backoffice.component';
import { ActivityBoxBackofficeComponent } from './activity-box-backoffice/activity-box-backoffice.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';



@NgModule({
  declarations: [
    ActivitiesSectionBackofficeComponent,
    ActivityBoxBackofficeComponent,
    ActivityFormComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class OrganizationModule { }
