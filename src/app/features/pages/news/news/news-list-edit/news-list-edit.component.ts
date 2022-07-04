import { Component, OnInit } from '@angular/core';
import { Novedad } from 'src/app/features/interfaces';
import { NewsService } from 'src/app/core/services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list-edit',
  templateUrl: './news-list-edit.component.html',
  styleUrls: ['./news-list-edit.component.scss']
})
export class NewsListEditComponent implements OnInit {

  novedades!: Novedad[];
  token!: string;

  constructor(private api: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.getNovedades();
    //this.token = JSON.parse(localStorage.loginToken).data.token;
    
  }

  getNovedades(): void {
    this.api.getNovedades().subscribe(novedades => this.novedades = novedades.data);
  }

  editN(id: number): void {
    this.router.navigate([`/backoffice/news/${id}`]);
  }

  deleteN(id: number): void {
    this.api.deleteNovedad(id).subscribe(()=>this.getNovedades());
  }

  createN(): void {
    this.router.navigate([`/backoffice/news/create`]);
  }

}
