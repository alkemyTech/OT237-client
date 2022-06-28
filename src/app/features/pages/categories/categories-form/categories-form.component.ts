import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormsModule, Validators ,FormControl} from '@angular/forms';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Categoria } from './categorie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})

export class CategoriesFormComponent implements OnInit {
  
  public Editor = ClassicEditor;
  public categoriaForm!:FormGroup
  public categoria:Categoria={}
  public base64Image!: string;
  public categoriaId!: number;
  public editMode = false;
  public imgBool:boolean=true
  public boton:boolean=true
  
  constructor(private builder:FormBuilder,private categoriasService : CategoriesService,private activatedRoute:ActivatedRoute, private router: Router) { 
    this.crearFormulario(this.categoria);
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.boton=false
      this.categoriaId = params.id;
      this.buscarCategoriaId(params.id);
    }}

  get f() { return this.categoriaForm.controls; }
  private crearFormulario(categoria:any): void {
    this.base64Image=categoria.image
    this.categoriaForm = new FormGroup({
      nombre: new FormControl     (categoria.name , [Validators.minLength(4), Validators.required]),
      descripcion: new FormControl(categoria.description , [Validators.required]),
      imagen: new FormControl     ("", [Validators.required])
    });
  }
  public accion(){
    if (!this.boton) {
      this.editarCategoria()
    }else{
      this.crearCategoria()
    }
  }
  public crearCategoria(){
         this.categoria= this.categoriaForm.value
         console.log(this.base64Image)
         let categoriaObjeto: { name: string, description: string, image: string } = { 
          name: this.categoriaForm.controls.nombre.value,  
          description: this.categoriaForm.controls.descripcion.value,
          image: `data:imagen/jpeg;base64,${this.base64Image}`
            }
            this.categoriasService.crearCategoria(categoriaObjeto).subscribe()
            if (this.categoriaForm.invalid) {
              return Object.values(this.categoriaForm.controls).forEach(control =>{
                control.markAsTouched();
              });
            }
          
          }

  public procesarImage(files: FileList | null = null): void {
    if (files) {
      this.imgBool=false
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }
  private _handleReaderLoaded(readerEvt: any): void {
    let binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }
    get nombreNoValido(){
    return this.categoriaForm.get('nombre')?.touched && this.categoriaForm.get('nombre')?.invalid
  }
  get descripcionNoValido(){
    return this.categoriaForm.get('descripcion')?.touched && this.categoriaForm.get('descripcion')?.invalid
  }
  get imgNoValido(){
    return this.categoriaForm.get('imagen')?.touched && this.base64Image==null
  }
  public buscarCategoriaId(id:number){
    this.categoriasService.buscarCategoriaId(id).subscribe((data:any)=>{
      this.categoria=data.data;
      this.editMode = true;
      this.crearFormulario(this.categoria); 
    })}
    public editarCategoria(){
      if (this.editMode) {
        let editCategoriaObject: { name?: string, description?: string, image?: string } = {
          name: this.categoriaForm.get("nombre")?.value,
        }
        if (this.categoriaForm.get("descripcion")?.value !== this.categoria.description) {
         editCategoriaObject.description = this.categoriaForm.get("descripcion")?.value
        }
        if (this.categoriaForm.get('imagen')?.touched) {
          editCategoriaObject.image = `data:image/jpeg;base64,${this.base64Image}`;
        }
        this.router.navigate(["/"])
        this.categoriasService.editarCategoria(this.categoriaId, editCategoriaObject)
        .subscribe(()=> this.buscarCategoriaId(this.categoriaId))
        
        return 
      }
    }
    
 }
