import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News, Novedad, Response } from "src/app/features/interfaces";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ 
      Group: this._groupId
    });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }

  public getNews(): Observable<News> {
    return this.http.get<News>("https://ongapi.alkemy.org/api/news/", { headers: this._headers });
  }

  public getNovedadById(id: number): Observable<Response> {
    return this.http.get<Response>(`https://ongapi.alkemy.org/api/news/${id}`, { headers: this._headers });
  }
}
