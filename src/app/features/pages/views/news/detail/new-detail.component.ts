import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  novedad!: Novedad;
  id!: number;
  dialog!: MatDialog

  constructor(private api: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.substring(11));
    this.api.getNovedadById(this.id).subscribe({
      next: novedad => this.novedad = novedad.data,
      error: e => this.openDialog(e.message)
    });
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
