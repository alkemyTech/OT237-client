import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Novedad, Novedades, ResponseObject } from "src/app/features/interfaces";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url: string = "https://ongapi.alkemy.org/api/news";

  constructor(private http: HttpClient) { }

  public getNovedades(): Observable<Novedades> {
    return this.http.get<Novedades>(this.url);
  }

  public getNovedadById(id: number): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}/${id}`);
  }

  public modifyNovedad(id: number, params: object): Observable<any> {
    return this.http.patch<ResponseObject>(`${this.url}/${id}`, params);
  }

  public deleteNovedad(id: number): Observable<ResponseObject> {
    return this.http.delete<ResponseObject>(`${this.url}/${id}`);
  }

  public postNovedad(novedad: Novedad): Observable<ResponseObject> {
    return this.http.post<ResponseObject>(this.url, novedad);
  }

}
