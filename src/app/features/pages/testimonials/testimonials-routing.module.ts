import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';

const routes: Routes = [
  {path: "nuevo-testimonio",component: TestimonialFormComponent},
  {path: "editar-testimonio/:id",component: TestimonialFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialsRoutingModule { }
