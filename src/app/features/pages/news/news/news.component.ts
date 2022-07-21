import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  novedades!: Novedad[];
  isLoading: boolean = true;

  constructor(private api: NewsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNovedades();
  }

  getNovedades(): void {
    this.api.getNovedades().subscribe(novedades => {
      this.novedades = novedades.data;
      this.sortNovedades(this.novedades);
    }, error => this.openDialog(error.message), () => this.isLoading = false);
  }

  sortNovedades(novedades: Novedad[]): void {
    novedades.sort(
      (a, b) => {
        if(a.updated_at===undefined||b.updated_at===undefined) return 0;
        return a.updated_at > b.updated_at ? -1: 1;
      }
    )
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
