import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  novedad!: Novedad;
  id!: number;

  constructor(private api: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.substring(11));
    this.api.getNovedadById(this.id).subscribe(novedad => this.novedad = novedad.data);
  }

}
