import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Novedad, ResponseObject, ResponseObjectArray } from "src/app/features/interfaces";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = `https://ongapi.alkemy.org/api/news`;

  constructor(private http: HttpService) { }

  public getNovedades(): Observable<ResponseObjectArray> {
    return this.http.get<ResponseObjectArray>(this.url);
  }

  public getNovedadById(id: number): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}/${id}`);
  }

  public getCategories(): Observable<ResponseObjectArray> {
    return this.http.get<ResponseObjectArray>(`https://ongapi.alkemy.org/api/categories`);
  }

  public modifyNovedad(id: number, params: object): Observable<any> {
    return this.http.put<ResponseObject>(`${this.url}/${id}`, params);
  }

  public deleteNovedad(id: number): Observable<ResponseObject> {
    return this.http.delete<ResponseObject>(`${this.url}/${id}`);
  }

  public postNovedad(novedad: Novedad): Observable<ResponseObject> {
    return this.http.post<ResponseObject>(this.url, novedad);
  }

}
