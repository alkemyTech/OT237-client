import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Novedades } from "src/app/features/interfaces";

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

  public getNews(): Observable<Novedades> {
    return this.http.get<Novedades>("https://ongapi.alkemy.org/api/news");
  }

  public getElementById(id: number) {
    return this.http.get(`https://ongapi.alkemy.org/api/news/${id}`);
  }

}
