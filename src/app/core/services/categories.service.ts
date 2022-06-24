import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/features/pages/categories/categories-form/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:string="https://ongapi.alkemy.org/api/"
 
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http:HttpClient) {}

  
  queryGet(){
    return  this.http.get(`${this.url}categories`)
  }
  public queryPost(categoria:any){

    return  this.http.post(`${this.url}categories`,categoria);
  }

  buscarCategoria(){
    return this.queryGet()
   }

   crearCategoria(categoria:object){
    return this.queryPost(categoria)
   }
}
