import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinksInputComponent } from './components/links-input/links-input.component';



@NgModule({
  declarations: [
    LinksInputComponent
  ],
  exports: [
	LinksInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
