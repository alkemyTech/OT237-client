import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private API :string = "https://ongapi.alkemy.org/api/login";
	constructor(private http :HttpClient) {

	}
	getToken(email:string, password:string) {
		const body = {
			email: email,
			password: password
		};
		return this.http.post<any>(this.API, body);
	}
}
