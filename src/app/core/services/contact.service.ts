import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URI: string = `${environment.url}contacts`

  constructor(private http: HttpClient) { }

  public addContact(contact: any) {
    return this.http.post(`${this.API_URI}`, contact);
  }

  public editContact(id: number, contact: any) {
    return this.http.put(`${this.API_URI}/${id}`, contact)
  }

  public getContact(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  public deleteContact(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
