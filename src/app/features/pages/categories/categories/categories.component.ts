import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/features/interfaces';
import { loadCategories, loadedCategories } from 'src/app/state/actions/categories.actions';
import { AppState } from 'src/app/state/app.state';
import {  selectCategoriesList,selectLoading } from 'src/app/state/selectors/categories.selectors';
import { Categoria } from '../categories-form/categorie.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categorias: Category[]=[];
  public loading$: Observable<boolean>  = new Observable()
  constructor(private categoriasService : CategoriesService, private router: Router,private store:Store<AppState>) { 
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories())
    this.loading$= this.store.select(selectLoading)
    this.store.select(selectCategoriesList).subscribe((data:any)=>{
      this.categorias=data.data
    })
  }

  buscarCategoriaId(id:any){
    this.router.navigate([`categorias/crear/${id}`])
  }
  borrarCategoria(id:any){
    this.categoriasService.DeleteCategoria(id).subscribe(data=>{
      this.categoriasService.buscarCategorias("")
    })
    
  }
}
