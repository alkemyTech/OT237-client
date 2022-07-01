import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OrganizationService {
	private url = "https://ongapi.alkemy.org/api/organization/";
	constructor(private http :HttpClient) {

	}
	public getOrg(id :number) {
		return this.http.get(this.url + id);
	}
}
