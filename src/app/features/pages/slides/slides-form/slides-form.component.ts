import { SlideService } from './../../../../core/services/slide.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { HttpService } from "../../../../core/services/http.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  
  public Editor = ClassicEditor;
  
  filebase64!:string;
  
  slideForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required]),
    order: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })
   

  form!: FormGroup;
  iterator: number = 0;
  pages: string[] = ["Presentation", "Slide 1", "Slide 2", "Slide 3"];
  fieldSlides: any = {
    text: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.pattern('(https?\:\/\/)?(www\.)?([a-z0-9]([a-z0-9]|(\-[a-z0-9]))*\.)+[a-z]+(\/[\-a-z_]+)*(\/[a-zA-Z0-9]+\.(jpg|png|jpeg|JPG|PNG|JPEG){1})')]]
  };

  constructor(private activatedRoute: ActivatedRoute,
              private Http: HttpService,
              private fb: FormBuilder, 
              private slideSvc: SlideService) { 

                this.form = this.fb.group({
                  welcomeText: ['', [Validators.required, Validators.minLength(20)]],
                  slide1: this.fb.group(this.fieldSlides),
                  slide2: this.fb.group(this.fieldSlides),
                  slide3: this.fb.group(this.fieldSlides),
                });
              }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      if(parametros.get("id") != null){
        var nro = parseInt(parametros.get("id")!);
        this.LoadForm(nro);
      }
    })

    this.slideSvc.getSlides().subscribe({
      next: (res: any) => {
        let slides = res.data;
        for(let i=0; i<slides.length; i++) {
          let slideField = `slide${i+1}`;
          this.form.get(slideField)?.get('text')?.setValue(slides[i].name);
          this.form.get(slideField)?.get('image')?.setValue(slides[i].image);
        }
      },
    });
  }

  //after the form is complete the fields are uploaded
  onSubmit(){
    if(this.slideForm.valid){
      var formData = new FormData();
      formData.append("name",this.slideForm.get("name")?.value);
      formData.append("description",this.slideForm.get("description")?.value);
      formData.append("image",this.filebase64);
      formData.append("order",this.slideForm.get("order")?.value);
      formData.append("created_at",(new Date).toDateString());
      this.Http.post('slides', formData)
        .subscribe((resp:any) =>{
          console.log(resp);
          if(resp.success){
            this.ClearForm();
          }
        });
    }
  }

  //Loads Form with object if is found in the endpoint by the id given
  LoadForm(id: number){
    this.Http.get('slides/'+id)
    .subscribe((resp:any) =>{
      var data = resp.data;
      this.slideForm.patchValue({
        name: data.name, 
        description: data.description,
        order: data.order,
        //image: data.image
      });
      this.filebase64 = data.image;
    });
  }

  //Loads the image after its uploaded by the user
  LoadImage(files:any) {
      const file = files.target.files[0];
      this.slideForm.patchValue({
        avatar: file
      });
      const reader = new FileReader();
      reader.onload = () => {
        this.filebase64 = reader.result as string;

      }
      reader.readAsDataURL(file)
    }

  //Clears the form after its uploaded
  ClearForm(){
    this.slideForm.patchValue({
      name: "",
      description: "",
      order: "",
      image: null
    });
    this.filebase64 = "";
  }

  get welcomeText() {
    return this.form.get('welcomeText');
  }

  
  get textBySlide() {
    return this.form.get('slide' + this.iterator)?.get('text');
  }

  get imageBySlide() {
    return this.form.get('slide' + this.iterator)?.get('image');
  }

  checkControl(control: any, type: string): boolean {
    return control.hasError(type) && (control.touched || control.dirty);
  }

  onNextPage() {
    if(this.iterator == this.pages.length - 1) {
      if(this.form.invalid) return;
      this.form.reset();
      this.iterator = 0;
    } else this.iterator++;
  }

  onPrevPage() {
    if(this.iterator == 0) return;
    this.iterator--;
  }
}