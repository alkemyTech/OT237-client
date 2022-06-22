import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted!: boolean;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{6,}$")]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator('password', 'confirmPassword') });
  }

  get f() { return this.form.controls; }

  passwordMatchValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }

  onSubmit() {
    this.isSubmitted = true;
    
    if (this.form.invalid) {
        return;
    }

    let formObject: { name: string, email: string, password: string } = 
    { 
        name: this.form.controls.name.value,
        email: this.form.controls.email.value,  
        password: this.form.controls.password.value,
    };
  }

}
