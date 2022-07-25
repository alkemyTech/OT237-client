import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { TestimonialsRoutingModule } from './testimonials-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestimonialsRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TestimonialsModule { }
