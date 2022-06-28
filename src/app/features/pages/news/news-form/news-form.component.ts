import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  public formNovedades!: FormGroup;/*  = new FormGroup({
    name: new FormControl("", []),
    content: new FormControl("", []),
    image: new FormControl("", [])
  }); */
  public novedades!: Novedad[];
  public novedad!: Novedad;

  public imgBool!: boolean;
  /* public imgNoValido!: boolean; */
  public base64Image!: string;

  constructor(private api: NewsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getNovedades();
    this.initForm();
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
    this.api.postNovedad(novedad).subscribe(n=>console.log(n));
  }

  modifyNovedad(id: number, params: object): void {
    this.api.modifyNovedad(id, params).subscribe();
  }

  deleteNovedad(id: number): void {
    this.api.deleteNovedad(id).subscribe();
  }

  initForm(): void {
    this.formNovedades = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required]],
      /* category: ['', [Validators.required]], */
      image: ['', [Validators.required]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if(this.base64Image){
      this.formNovedades.value.image = `data:image/jpeg;base64,${this.base64Image}`;
    }

    this.postNovedad(this.formNovedades.value);
  }

  public processImage(files: FileList | null = null): void {
    if (files) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }

  private _handleReaderLoaded(readerEvt: any): void {
    var binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }

}
