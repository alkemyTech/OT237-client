/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsListEditComponent } from './news/news-list-edit/news-list-edit.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: ":id", component: NewsFormComponent},
      {path: "", component: NewsListEditComponent},
      {path: "create", component: NewsFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeNewsRoutingModule { }
 */