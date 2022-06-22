import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';


@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	private passwordValidator() :ValidatorFn{
		return (control :AbstractControl): ValidationErrors | null => {
			const value = control.value;
			if(/[a-zA-Z]/.test(value) && /\d/.test(value) && /\W/.test(value)) {
				return null;
			} else {
				return {passwordInvalid: true};
			}
		}
	}
	loginForm = new FormGroup({
		email: new FormControl('', [
			Validators.required,
			Validators.email
		]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			this.passwordValidator()
		])
	});
	constructor() { }

	ngOnInit(): void {
	
	}
	public emailError(input :string) {
		return this.loginForm.get(input)?.errors?.['email'];
	}
	public passwordError(input :string) {
		return this.loginForm.get(input)?.errors?.['passwordInvalid'];
	}
	public requiredError(input :string) {
		return this.loginForm.get(input)?.errors?.['required'];
	}
	public minLengthError(input :string) {
		return this.loginForm.get(input)?.errors?.['minlength'];
	}
	public invalid(input :string) {
		return this.loginForm.get(input)?.invalid;
	}
	public touched(input :string) {
		return this.loginForm.get(input)?.touched;
	}
}
