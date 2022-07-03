import { Component, OnInit } from '@angular/core';
import { Novedad } from 'src/app/features/interfaces';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-list-edit',
  templateUrl: './news-list-edit.component.html',
  styleUrls: ['./news-list-edit.component.scss']
})
export class NewsListEditComponent implements OnInit {

  novedades!: Novedad[];

  constructor(private api: NewsService) { }

  ngOnInit(): void {
    this.getNovedades();
  }

  getNovedades(): void {
    this.api.getNovedades().subscribe(novedades => this.novedades = novedades.data);
  }

  editN(id: number): void {

  }

  deleteN(id: number): void {

  }

}
