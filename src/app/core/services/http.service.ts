import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private _headers!: HttpHeaders;
  private _alkemyApiURL: string = 'https://ongapi.alkemy.org/api/';

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {
    return this.http.get<T>(this._alkemyApiURL+url, activateHeader ? { headers: this._headers }: {});
  }

  public post<T>(url: string, body: any, activateHeader:boolean = false ):Observable<T> {
    return this.http.post<T>(this._alkemyApiURL+url, body, activateHeader ? { headers: this._headers }: {});
  }
}

