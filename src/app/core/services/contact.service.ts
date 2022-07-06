import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contact } from "src/app/features/interfaces";
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class ContactService {

  constructor(private httpService: HttpService) {
  }

  getAllContacts(): Observable<any> {
    return this.httpService.get<Contact[]>(environment.url + 'contacts');
  }

  getContact(id: number): Observable<any> {
    return this.httpService.get<Contact>(environment.url + 'contacts/' + id);
  }

  searchContactsByValue(value: string): Observable<any> {
    return this.httpService.get<Contact[]>(`${environment.url}contacts?search=${value}`);
  }

  addContact(contact: Contact): Observable<any> {
    return this.httpService.post<Contact>(environment.url + 'contacts', contact);
  }

  editContact(id: number, contact: Contact): Observable<any>{
    return this.httpService.put<Contact>(environment.url + 'contacts/' + id, contact);
  }

  deleteContact(id: number): Observable<any>{
    return this.httpService.delete<Contact>(environment.url + 'contacts/' + id);
  }

}