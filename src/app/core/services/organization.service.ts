import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private API_ORG: string = `${environment.url}organization`;

  constructor(private http: HttpService) { }

  get() {
    return this.http.get(this.API_ORG);
  }

  getOne(id: number) {
    return this.http.get(`${this.API_ORG}/${id}`);
  }

  save(organization: any) {
    return this.http.post(this.API_ORG, organization);
  }

  update(organization: any, id: number) {
    return this.http.put(`${this.API_ORG}/${id}`, organization);
  }

}
