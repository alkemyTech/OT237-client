import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { BackofficeComponent } from '../../backoffice.component';


@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
