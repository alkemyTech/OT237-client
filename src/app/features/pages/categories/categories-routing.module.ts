import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [ 
{
  path:"",
  children:[
    { path: "crear",  component: CategoriesFormComponent },
    { path: "crear/:id", component: CategoriesFormComponent },
    { path: "backoffice", component: CategoriesComponent },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
