import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { HttpService } from "../../../../core/services/http.service";

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
   

  constructor(private activatedRoute: ActivatedRoute,
              private Http: HttpService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      if(parametros.get("id") != null){
        var nro = parseInt(parametros.get("id")!);
        this.LoadForm(nro);
      }
    })
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
}
