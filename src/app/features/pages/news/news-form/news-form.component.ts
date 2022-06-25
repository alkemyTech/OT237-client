import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad } from 'src/app/features/interfaces';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public formNovedades!: FormGroup;
  public novedades!: Novedad[];
  public novedad!: Novedad;

  constructor(private api: NewsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getNovedades();
    this.initForm();

    this.modifyNovedad(2090, {name: "nuevo nombre 2"});
  }

  getNovedades(): void {
    this.api.getNovedades().subscribe(novedades => {
      this.novedades = novedades.data;
    });
  }

  getNovedadById(id: number): void {
    this.api.getNovedadById(id).subscribe(novedad => {
      this.novedad = novedad.data;
    });
  }

  postNovedad(novedad: Novedad): void {
    this.api.postNovedad(novedad).subscribe();
  }

  modifyNovedad(id: number, params: object): void {
    this.api.modifyNovedad(id, params).subscribe();
  }

  deleteNovedad(id: number): void {
    this.api.deleteNovedad(id).subscribe();
  }

  initForm(): void {
    this.formNovedades = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  onSubmit(): void {

  }

}
