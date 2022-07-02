import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  novedades!: Novedad[];

  constructor(private api: NewsService) { }

  ngOnInit(): void {
    this.api.getNovedades().subscribe(novedades => {
      this.novedades = novedades.data;
      this.novedades.sort(
        (a, b) => {
          if(a.updated_at===undefined||b.updated_at===undefined) return 0;
          return a.updated_at > b.updated_at ? -1: 1;
        }
      );
    });
  }

}
