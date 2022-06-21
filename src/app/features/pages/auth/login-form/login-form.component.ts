import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	loginForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
		])
	});
	constructor() { }

	ngOnInit(): void {
	
	}
	emailError(input :string) {
		return this.loginForm.get(input)?.errors?.['email'];
	}
	requiredError(input :string) {
		return this.loginForm.get(input)?.errors?.['required'];
	}
	minLengthError(input :string) {
		return this.loginForm.get(input)?.errors?.['minlength'];
	}
	invalid(input :string) {
		return this.loginForm.get(input)?.invalid;
	}
	touched(input :string) {
		return this.loginForm.get(input)?.touched;
	}
	
}
