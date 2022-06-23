import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from 'src/app/core/services/http.service';
import { Novedad } from 'src/app/features/interfaces';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public novedades: Novedad[];

  constructor(private api: HttpService) { }

  ngOnInit(): void {
    this.api.getNews().subscribe(news => {
      this.novedades = news.data;
      console.log(this.novedades);
    });
  }

  getNews(): void {

  }

  getNovedadById(id: number): void {
    
  }

}
