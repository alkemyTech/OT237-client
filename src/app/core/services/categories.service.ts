import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/features/interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:string= environment.url
  
  
  enviarCategoriaSubjet= new Subject<[]>();
  enviarCategoriaObservables = this.enviarCategoriaSubjet.asObservable();
 
  constructor(private http:HttpClient,private httpService:HttpService) {}

  public queryPost(categoria:object){
    return  this.http.post(`${this.url}categories`,categoria);}

  public queryGet(id:string){
    return  this.http.get<Category[]>(`${this.url}categories/${id}`)}

  public queryPut(id:string ,categoria:any): Observable<any>{
    return  this.http.put(`${this.url}categories/${id}`,categoria)}
  
  


    // addMember(member: Member): Observable<any> {
    //   return this.httpService.post<Member>(environment.url + 'members', member);
    // }
   
    
    // crearCategoria(categoria: object): Observable<any> {
    //   return this.httpService.post<Category>(environment.url + 'categories', false,categoria);
    // }


  public buscarCategorias(id:string): Observable<any>{
    return this.httpService.get<Category[]>(environment.url + 'categories');}

  public buscarCategoriaId(id:any){
    return this.httpService.get<Category>(environment.url + 'categories/' + id);}

  public DeleteCategoria(id:any){
    return this.httpService.delete<Category>(environment.url + 'categories/' + id);}

  public crearCategoria(categoria:Category): Observable<any>{
   return this.httpService.post<Category>(environment.url + 'categories', false,categoria);} 

  public editarCategoria(id:number,categoria:any){
    return this.httpService.put<Category>(environment.url + 'categories/' + id, categoria);
    return this.queryPut(`${id}`,categoria)
  }
  
 
    

}
