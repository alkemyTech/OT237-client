import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from 'src/app/core/services/http.service';
import { Novedad, Response } from 'src/app/features/interfaces';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public Editor = ClassicEditor;
  
  novedades: Novedad[]|any;
  novedad: Response|any;

  constructor(private api: HttpService) { }

  ngOnInit(): void {
    /* this.api.get("https://ongapi.alkemy.org/api/news/", true).subscribe(news => {
      this.news = news["data"];
    }); */
    //this.getNews();
    //this.getNovedadById(2090);
    this.api.get("https://ongapi.alkemy.org/api/news/2090", true).subscribe(news => this.novedad = news);
    //setInterval(()=>alert(this.novedad), 1000);
  }

  getNews(): void {
    this.api.getNews().subscribe(news => this.novedades = news.data);
  }

  getNovedadById(id: number): void {
    this.api.getNovedadById(id).subscribe(n => { 
      this.novedad = n;
    });
  }

}
