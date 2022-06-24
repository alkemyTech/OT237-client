import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categorie.model';




@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})

export class CategoriesFormComponent implements OnInit {
  forma!:FormGroup
  public descripcion = ClassicEditor;
  
  disabled=true
  categoria!:Categoria 
  base64Image!: string;
  prueba!:string
  
  
  constructor(private builder:FormBuilder,private categoriasService : CategoriesService) { 
    this.crearFormulario()
  }
  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.touched && this.forma.get('nombre')?.invalid
  }

  get descripcionNoValido(){
    return this.forma.get('descripcion')?.touched && this.forma.get('descripcion')?.invalid
  }

  get imgNoValido(){
    return this.forma.get('imagen')?.touched && this.base64Image==null
  }

  public procesarImage(files: FileList | null = null): void {
    if (files) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }

  private _handleReaderLoaded(readerEvt: any): void {
    let binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }

  public crearFormulario(){
    this.forma=this.builder.group({
      nombre:     ["", [Validators.required, Validators.minLength(4)]],
      descripcion:["", [Validators.required, Validators.minLength(11)]],
      imagen:     ["", [Validators.required]]
    })
}

  public crearCategoria(){
    if (this.base64Image==null) {
    }else{
     this.categoria= this.forma.value
     let categoriaObjeto: { name: String, description: String, image: String } = { 
        name: this.categoria.nombre,  
        description: this.categoria.descripcion,
        image: `data:imagen/jpeg;base64,${this.base64Image}`
      };
     this.categoriasService.crearCategoria(categoriaObjeto).subscribe((data:any)=>{console.log("anda")}) 
    }
      if (this.forma.invalid) {
        return Object.values(this.forma.controls).forEach(control =>{
          console.log(control)
          control.markAsTouched();
        });
      }}
 

}
