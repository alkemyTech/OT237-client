import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  novedad!: Novedad;
  id!: number;
  loading: boolean = true;

  constructor(private api: NewsService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.substring(11));
    this.api.getNovedadById(this.id).subscribe({
      next: novedad => this.novedad = novedad.data,
      error: error => this.openDialog(error.message),
      complete: () => this.loading = false
    });
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
