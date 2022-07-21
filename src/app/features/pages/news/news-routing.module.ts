import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailComponent } from '../views/news/detail/new-detail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "", component: NewsComponent},
      {path: ":id", component: NewDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
