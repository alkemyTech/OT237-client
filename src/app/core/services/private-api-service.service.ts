import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PrivateApiService {
  private _groupId!: string;
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient) { 
    this._headers = new HttpHeaders({ 
      Group: this._groupId
    });
   }

  get<T>(url: string, id?: number, activateHeader:boolean = false ): Observable<T> {
    return this.http.get<T>(`${url}/${id}`, activateHeader ? { headers: this._headers }: {});
  }
}
