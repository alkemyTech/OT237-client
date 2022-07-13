import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  novedades!: Novedad[];
  dialog!: MatDialog;

  constructor(private api: NewsService) { }

  ngOnInit(): void {
    this.api.getNovedades().subscribe({
      next: novedades => {
        this.novedades = novedades.data;
        this.novedades.sort(
          (a, b) => {
            if(a.updated_at===undefined||b.updated_at===undefined) return 0;
            return a.updated_at > b.updated_at ? -1: 1;
          }
        );
      },
      error: e => this.openDialog(e.message)
    });
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
