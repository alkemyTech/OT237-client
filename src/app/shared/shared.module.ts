import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactPhonePipe } from './pipes/contact-phone.pipe';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LinksInputComponent } from './components/links-input/links-input.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    DialogComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent
  ],
  exports: [
	  LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
