import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  
  { 
    path: "categorias/crear", 
    component: CategoriesFormComponent },
  { 
     path: "categorias/crear/:id", 
    component: CategoriesFormComponent },
  {

    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
