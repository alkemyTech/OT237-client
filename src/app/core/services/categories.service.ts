import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:string="https://ongapi.alkemy.org/api/"
 
  constructor(private http:HttpClient) {}

  public queryPost(categoria:any){
    return  this.http.post(`${this.url}categories`,categoria);}

  public queryGet(id:string){
    return  this.http.get(`${this.url}categories/${id}`)}

  public queryPut(id:string ,categoria:any){
    return  this.http.put(`${this.url}${id}`,categoria)}

  public crearCategoria(categoria:object){
    return this.queryPost(categoria)} 

  public buscarCategoriaId(id:any){
    return this.queryGet(`2111`)}

  public editarCategoria(id:number,categoria:any){
    return this.http.put(`${this.url}categories/${id}`,categoria)}
}
