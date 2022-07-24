import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OrganizationRoutingModule } from './organization-routing.module';
import { BackofficeComponent } from '../../backoffice.component';




@NgModule({
  declarations: [
    BackofficeComponent,

  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class OrganizationModule { }
