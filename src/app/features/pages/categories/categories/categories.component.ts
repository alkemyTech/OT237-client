import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Categoria } from '../categories-form/categorie.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categorias: Categoria[]=[];
  constructor(private categoriasService : CategoriesService, private router: Router) { 
  }
  ngOnInit(): void {
    this.categoriasService.buscarCategorias("")
    this.categoriasService.enviarCategoriaObservables.subscribe((data:any)=>{
     this.categorias=data.data
   })
  }
  buscarCategoriaId(id:any){
    this.categoriasService.buscarCategoriaId(id)
    this.router.navigate([`categorias/crear/${id}`])
  }
  borrarCategoria(id:any){
    this.categoriasService.queryDelete(id).subscribe(data=>{
      this.categoriasService.buscarCategorias("")
    })
    
  }
}
