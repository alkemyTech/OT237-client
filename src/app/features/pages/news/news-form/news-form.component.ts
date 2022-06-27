import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpService } from 'src/app/core/services/http.service';
import { Novedad } from 'src/app/features/interfaces';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  public Editor = ClassicEditor;
  public formNovedades: FormGroup;
  public novedades: Novedad[];

  constructor(private api: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getNews();
    this.initForm();
  }

  getNews(): void {
    this.api.getNews().subscribe(news => {
      this.novedades = news.data;
    });
  }

  getNovedadById(id: number): void {
    //this.api.getElementById(id);
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
    console.log("Submit successful!")


  }

}
