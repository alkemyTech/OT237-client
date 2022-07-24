import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	isLoading: boolean = false;

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
	constructor(private loginService :LoginService, private dialog: MatDialog, public router: Router) { }

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

	public  logInSubmit() {
		const that = this;
		that.isLoading = true;
		this.loginService.getToken(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe( (resp: any) => {
			if(resp.error == "No token") {
				console.log("The token is invalid");
			} else {
				localStorage.setItem("loginToken", JSON.stringify(resp));
				this.router.navigateByUrl('home')
			}
			that.isLoading = false;
		},(err: any) => {
			that.openDialog(err);
		} ) 
	}

	openDialog(error: string){
		this.dialog.open(DialogComponent, { data: error });
	}
}
