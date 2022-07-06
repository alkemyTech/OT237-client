import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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

  public post<T>(url: string, activateHeader:boolean = false , body?: any):Observable<T> {
  
    return this.http.post<T>(url, body, activateHeader ? { headers: this._headers }: {});
  }

  public put<T>(url: string, body?: any, id?: any, activateHeader:boolean = false):Observable<T> {
    return this.http.put<T>(url, body, activateHeader ? { headers: this._headers }: {});
  }

  public delete<T>(url: string, activateHeader:boolean = false, id?: any):Observable<T> {
    return this.http.delete<T>(url, activateHeader ? { headers: this._headers }: {});
  }
}
