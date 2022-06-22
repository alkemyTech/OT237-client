import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public testimonialsForm!: FormGroup;
  public isSubmitted!: boolean;
  private file!: File;
  private editMode!: boolean;

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.isSubmitted = false;
  }

  get f() { return this.testimonialsForm.controls; }

  public processImage(files: FileList | null = null): void {
    if (files) {
      this.file = files[0]
    }
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted = true;
    if (this.testimonialsForm.invalid) {
      return;
    }
    let formObject: { name: string, description: string, image: File } = { 
      name: this.testimonialsForm.controls.name.value,  
      description: this.testimonialsForm.controls.description.value,
      image: this.file
    };
    console.log(formObject)
  }

  private buildForm(): void {
    this.testimonialsForm = new FormGroup({
      name: new FormControl('', [Validators.minLength(4), Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }
}
