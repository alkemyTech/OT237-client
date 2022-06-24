import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm!: FormGroup;

  constructor() {
    this.buildForm()
  }

  get f() { return this.contactForm.controls; }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    }
    let contactObject: { name: string, email: string, phone: string, message: string } = { 
      name: this.f.name.value,  
      email: this.f.email.value,
      phone: this.f.phone.value,
      message: this.f.message.value
    };
    // TODO: http POST contactObject to API
  }

  private buildForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      message: new FormControl('', [Validators.required])
    });
  }
}
