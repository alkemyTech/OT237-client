import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { HttpService } from "../../../../core/services/http.service";

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})

export class ProjectsFormComponent implements OnInit {
  
  public Editor = ClassicEditor;
  
  filebase64!:string;
  
  flagUpdate!:boolean;

  idProject!: number;

  ProjectForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required]),
    duedate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  })
   

  constructor(private activatedRoute: ActivatedRoute,
              private Http: HttpService) { }

  ngOnInit(): void {
    this.flagUpdate = false;
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      if(parametros.get("id") != null){

        //si consigue un id se activa la bandera de update
        this.flagUpdate = true;

        var nro = parseInt(parametros.get("id")!);
        this.LoadForm(nro);
      }
    })
  }

  //after the form is complete the fields are uploaded
  onSubmit(){
    if(this.ProjectForm.valid){
      var formData = new FormData();
      formData.append("title",this.ProjectForm.get("title")?.value);
      formData.append("description",this.ProjectForm.get("description")?.value);
      formData.append("image",this.ProjectForm.get("image")?.value);
      formData.append("due_date", this.ProjectForm.get("duedate")?.value);
      //console.log(Date.parse(this.ProjectForm.get("duedate")?.value).toString());

      //if the flag is active it´s a update
      if(this.flagUpdate){
        formData.append("id",this.idProject.toString());
        formData.append("updated_at",(new Date).toDateString());

        this.Http.put('projects', formData)
        .subscribe((resp:any) =>{
          console.log(resp);
          if(resp.success){
            this.ClearForm();
          }
        });
      }
      //if the flag isn´t active it´s a insert
      else{
        formData.append("created_at",(new Date).toDateString());

        this.Http.post('projects', formData)
        .subscribe((resp:any) =>{
          console.log(resp);
          if(resp.success){
            this.ClearForm();
          }
        });
      }
    }
  }

  //Loads Form with object if is found in the endpoint by the id given
  LoadForm(id: number){
    this.Http.get('projects/'+id)
    .subscribe((resp:any) =>{
      var data = resp.data;
      this.ProjectForm.patchValue({
        title: data.title, 
        description: data.description,
        duedate: data.due_date,
        //image: data.image
      });
      this.filebase64 = data.image;
      this.idProject = id;
    });
  }

  //Loads the image after its uploaded by the user
  LoadImage(files:FileList | null = null) {
      if(files){
        const file = files[0];
        //this.ProjectForm.controls["image"].setValue(files.target.files[0]);
  
        this.ProjectForm.patchValue({
          avatar: file
        });
        const reader = new FileReader();
        reader.onload = () => {
          this.filebase64 = reader.result as string;
          //this.ProjectForm.controls["image"].setValue(reader.result);
        }
        reader.readAsDataURL(file)
      }
    }

  //Clears the form after its uploaded
  ClearForm(){
    this.ProjectForm.patchValue({
      title: "",
      description: "",
      due_date: "",
      image: null
    });
    this.filebase64 = "";
    this.idProject = 0;
  }
}