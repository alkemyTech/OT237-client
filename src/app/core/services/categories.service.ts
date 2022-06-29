import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:string="https://ongapi.alkemy.org/api/"
  enviarCategoriaSubjet= new Subject<[]>();
  enviarCategoriaObservables = this.enviarCategoriaSubjet.asObservable();
 
  constructor(private http:HttpClient) {}

  public queryPost(categoria:object){
    return  this.http.post(`${this.url}categories`,categoria);}

  public queryGet(id:string){
    return  this.http.get(`${this.url}categories/${id}`)}

  public queryPut(id:string ,categoria:any){
    return  this.http.put(`${this.url}${id}`,categoria)}
  
  public queryDelete(id:any){
    return  this.http.delete(`${this.url}categories/${id}`)}

  public crearCategoria(categoria:object){
    console.log("categoria")
    return this.queryPost(categoria)} 

  public buscarCategoriaId(id:any){
    return this.queryGet(`${id}`)}

  public editarCategoria(id:number,categoria:any){
    return this.http.put(`${this.url}categories/${id}`,categoria)}
  
  public buscarCategorias(id:string){
    return  this.http.get(`${this.url}categories`).subscribe((data:any)=>{
      this.enviarCategoriaSubjet.next(data)
    })}
  
}
