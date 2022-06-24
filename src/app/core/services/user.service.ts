import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api_users: string = 'https://ongapi.alkemy.org/api/users';

  constructor(private http: HttpClient) { }
  
  getAllUsers() {
    return this.http.get(this.api_users);
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
}
