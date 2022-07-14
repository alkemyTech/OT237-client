import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/contact.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm!: FormGroup;
  error!: string;

  constructor(
    private contactService: ContactService, 
    public dialog: MatDialog, ) {
    this.buildForm()
  }

  ngOnInit() {
  }

  @ViewChild(DialogComponent)


  get f() { return this.contactForm.controls; }

  public handleSubmit(e: Event): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
    }
    let contactObject: { name: string, email: string, phone: string, message: string } = { 
      name: this.f.name.value,  
      email: this.f.email.value,
      phone: this.f.phone.value,
      message: this.f.message.value
    };
    this.contactService.addContact(contactObject)
      .subscribe({
        next: data => console.log(data),
        error: e => this.openDialog(e.message)
      })
  }

  private buildForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      message: new FormControl('', [Validators.required])
    });
  }

  openDialog(error: string){
    this.dialog.open(DialogComponent, { data: error });
  }

}
