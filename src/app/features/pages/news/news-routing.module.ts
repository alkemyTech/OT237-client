import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailComponent } from '../views/news/detail/new-detail.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsListEditComponent } from './news/news-list-edit/news-list-edit.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "novedades",component: NewsComponent},
      {path: "novedades/:id",component: NewDetailComponent},
      {path: "backoffice/news/:id",component: NewsFormComponent},
      {path: "backoffice/news",component: NewsListEditComponent},
      {path: "backoffice/news/create",component: NewsFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
