import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_users: string = `${environment.url}users`;

  constructor(private http: HttpService) { }
  
  getAllUsers(limit: number) {
    return this.http.get(`${this.api_users}?limit=${limit}`);
  }

  getUser(id: number) {
    return this.http.get(`${this.api_users}/${id}`);
  }

  save(user: any) {
    return this.http.post(this.api_users, user);
  }

  update(user: any) {
    return this.http.put(`${this.api_users}/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.api_users}/${id}`);
  }

  searchByName(name: string) {
    return this.http.get(`${this.api_users}?search=${name}`);
  }
}
