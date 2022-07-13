import { Component, OnInit } from '@angular/core';
import { Novedad } from 'src/app/features/interfaces';
import { NewsService } from 'src/app/core/services/news.service';
import { Router } from '@angular/router';
import { CREDENTIALS } from 'src/app/features/features-variables';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'app-news-list-edit',
  templateUrl: './news-list-edit.component.html',
  styleUrls: ['./news-list-edit.component.scss']
})
export class NewsListEditComponent implements OnInit {

  novedades!: Novedad[];
  token!: string;
  isAdmin: boolean = JSON.parse(localStorage.loginToken).data.user.role_id === CREDENTIALS.ADMIN;
  dialog!: MatDialog;

  constructor(private api: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.getNovedades(); 
  }

  getNovedades(): void {
    this.api.getNovedades().subscribe({
      next: novedades => this.novedades = novedades.data,
      error: e => this.openDialog(e.message)
    });
  }

  editN(id: number): void {
    this.router.navigate([`/backoffice/news/${id}`]);
  }

  deleteN(id: number): void {
    this.api.deleteNovedad(id).subscribe({
      next: () => this.getNovedades(),
      error: e => this.openDialog(e.message)
    });
  }

  createN(): void {
    this.router.navigate([`/backoffice/news/create`]);
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
