import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';

const routes: Routes = [
  {path: "",component: TestimonialFormComponent},
  {path: ":id",component: TestimonialFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
