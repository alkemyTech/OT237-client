import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailComponent } from '../../../views/news/detail/new-detail.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsListEditComponent } from './news/news-list-edit/news-list-edit.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "",component: NewsComponent},
      {path: "list",component: NewsListEditComponent},
      {path: ":id",component: NewDetailComponent},
      {path: ":id",component: NewsFormComponent},
      {path: "create",component: NewsFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
