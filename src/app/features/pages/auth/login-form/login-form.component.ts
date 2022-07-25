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
	estatus:boolean=false;
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

public async logInSubmit() {
        const that = this;
        that.isLoading = true;
        this.loginService.getToken(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe( (resp: any) => {
            if(resp.error=="Missing required fields"){
				return Object.values(this.loginForm.controls).forEach(control =>{
					control.markAsTouched();
					that.isLoading = false;
				  });
			}

			if(resp.error == "No token") {
                console.log("The token is invalid");
				
            } else {
				console.log(resp)
                localStorage.setItem("loginToken", JSON.stringify(resp));
				console.log(resp)
                if (resp.data.user.role_id=1) {
                    this.router.navigateByUrl('home')
                }
				if (resp.data.user.role_id=2) {
                    this.router.navigateByUrl('backoffice')
				}
            }
			
            that.isLoading = false;
        },(err: any) => {
            that.openDialog(err);
        } ) 
		
    }


	openDialog(error: string){
		this.dialog.open(DialogComponent, { data: error });
	}
	get emailNoValido(){
		return this.loginForm.get('email')?.touched && this.loginForm.get('email')?.invalid
	  }
	  get passwordNoValido(){
		return this.loginForm.get('password')?.touched && this.loginForm.get('password')?.invalid
	  }
}
