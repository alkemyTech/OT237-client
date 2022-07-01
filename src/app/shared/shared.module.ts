import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinksInputComponent } from './components/links-input/links-input.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactPhonePipe } from './pipes/contact-phone.pipe';



@NgModule({
  declarations: [
    LinksInputComponent,
    PageTitleComponent,
    ContactPhonePipe
  ],
  exports: [
	  LinksInputComponent,
    PageTitleComponent,
    ContactPhonePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
