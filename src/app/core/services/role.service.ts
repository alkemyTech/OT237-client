import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  api_roles: string = 'https://ongapi.alkemy.org/api/roles';

  constructor(private http: HttpClient) { }
  
  getAllRoles() {
    return this.http.get(this.api_roles);
  }

  getRole(id: number) {
    return this.http.get(`${this.api_roles}/${id}`);
  }

  save(role: any) {
    return this.http.post(this.api_roles, role);
  }

  update(role: any) {
    return this.http.put(`${this.api_roles}/${role.id}`, role);
  }

  delete(id: number) {
    return this.http.delete(`${this.api_roles}/${id}`);
  }
}
