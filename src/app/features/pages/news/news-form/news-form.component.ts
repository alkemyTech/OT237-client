import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NewsService } from 'src/app/core/services/news.service';
import { Novedad, Category } from 'src/app/features/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public formNovedades!: FormGroup;
  public novedad!: Novedad;
  public categories!: Category[];

  public imgBool!: boolean;
  public base64Image!: string;
  public editMode: boolean = false;
  public editId!: number;

  constructor(
    private api: NewsService, 
    private formBuilder: FormBuilder, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.initForm();
    this.checkUrl();
  }

  checkUrl(): void {
    if("/backoffice/news"!==this.router.url){
      let id: number = parseInt(this.router.url.substring(17));
      this.editMode = true;
      this.fillForm(id);
    }
  }

  /* API methods */
  getCategories(): void {
    this.api.getCategories().subscribe(categories => {
      this.categories = categories.data;
    });
  }

  getNovedadById(id: number): void {
    this.api.getNovedadById(id).subscribe(novedad => {
      this.novedad = novedad.data;
    });
  }

  postNovedad(novedad: Novedad): void {
    this.api.postNovedad(novedad).subscribe(()=>{
      window.location.reload();
    });
  }

  modifyNovedad(id: number, params: object): void {
    this.api.modifyNovedad(id, params).subscribe(()=>{
      this.router.navigate(["/backoffice/news"]);
    });
  }

  /* Form methods */
  initForm(): void {
    this.formNovedades = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required]],
      'category_id': ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.editMode? this.submitEditedNovedad(): this.submitNewNovedad();
  }

  submitNewNovedad(): void {
    if(this.base64Image) {
      this.formNovedades.value.image = `data:image/jpeg;base64,${this.base64Image}`;
    }
    this.postNovedad(this.formNovedades.value);
  }

  submitEditedNovedad(): void {
    if(this.formNovedades.value.image === ""){
      delete this.formNovedades.value.image;
    }
    else{
      this.formNovedades.value.image = `data:image/jpeg;base64,${this.base64Image}`;
    }
    this.modifyNovedad(this.editId, this.formNovedades.value);
  }

  fillForm(id: number): void {
    this.editId = id;
    this.api.getNovedadById(id).subscribe((novedad:any )=> {
      this.formNovedades = this.formBuilder.group({
        name: [novedad.data.name, [Validators.required, Validators.minLength(4)]],
        content: [novedad.data.content, [Validators.required]],
        'category_id': [novedad.data.category_id, [Validators.required]],
        image: ['', []]
      });

    });
  }

  /* Base64 conversion methods */
  public processImage(files: FileList | null = null): void {
    if (files) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }

  private _handleReaderLoaded(readerEvt: any): void {
    var binaryString = readerEvt.target.result;
    this.base64Image = btoa(binaryString);
  }

}
