import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { LinksInputComponent } from './components/links-input/links-input.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactPhonePipe } from './pipes/contact-phone.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    DialogComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
	  LinksInputComponent,
    PageTitleComponent,
    ContactFormComponent,
    ContactPhonePipe,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule
  ],
 
})
export class SharedModule { }
