import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { LinksInputComponent } from './components/links-input/links-input.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactPhonePipe } from './pipes/contact-phone.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';


@NgModule({
  declarations: [
    LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    LazyLoadComponent
  ],
  exports: [
	  LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    LazyLoadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ]
})
export class SharedModule { }
