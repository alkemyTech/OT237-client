import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

const routes: Routes = [ 
{
  path:"",
  children:[
    { path: "", component: CategoriesComponent },
    { path: "crear",  component: CategoriesFormComponent },
    { path: "editar/:id", component: CategoriesFormComponent },

    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
