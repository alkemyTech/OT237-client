import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-members-form',
  templateUrl: './members-form.component.html',
  styleUrls: ['./members-form.component.scss']
})
export class MembersFormComponent implements OnInit {
  form!: FormGroup;
  isSubmitted!: boolean;
  file!: File;
  Editor = ClassicEditor;
  base64!: string;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      facebookUrl: ['', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
      linkedinUrl: ['', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
    });
  }

  get f() { return this.form.controls; }

  public processImage(files: FileList | null = null): void {
    if (files) {
      this.file = files[0]!; 
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.base64 = (<string>reader.result!);
    };
    reader.readAsDataURL(this.file);  
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    let formObject: { name: string, description: string, image: string, facebookUrl: string, linkedinUrl: string } = { 
      name: this.form.controls.name.value,  
      description: this.form.controls.description.value,
      image: this.base64,
      facebookUrl: this.form.controls.facebookUrl.value,
      linkedinUrl: this.form.controls.linkedinUrl.value
    };
    console.log(formObject);
  }

}