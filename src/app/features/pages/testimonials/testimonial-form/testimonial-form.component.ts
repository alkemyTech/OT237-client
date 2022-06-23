import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Testimonial {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date
}

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {
  public Editor = ClassicEditor;
  public testimonialsForm!: FormGroup;
  public isSubmitted!: boolean;
  public editMode: boolean = false;
  public base64Image!: string;

  public testimonial: Testimonial = { }

  constructor(private testimonialsService: TestimonialsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.isSubmitted = false;
    let res: any;
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.testimonialsService.getTestimonial(params.id)
        .subscribe({
          next: data => {
            res = data
            this.testimonial = res.data
            console.log(this.testimonial)
            this.editMode = true;
            this.buildForm();
          },
          error: e => {
            console.log(e)
            this.router.navigate(["/"])
          }
        })
    }
  }

  get f() { return this.testimonialsForm.controls; }

  //image processing after selection
  public processImage(files: FileList | null = null): void {
    if (files) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0])
    }
  }
  //transform image to Base64 string
  private _handleReaderLoaded(readerEvt: any): void {
    var binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted = true;
    if (this.testimonialsForm.invalid) {
      return;
    }
    let formObject: { name: string, description: string, image: string } = { 
      name: this.testimonialsForm.controls.name.value,  
      description: this.testimonialsForm.controls.description.value,
      image: `data:image/jpeg;base64,${this.base64Image}`
    };
    this.testimonialsService.addTestimonial(formObject)
      .subscribe({
        next: data => {
          console.log(data)
        },
        error: e => {
          console.log(e)
        }
      })
  }

  private buildForm(): void {
    this.testimonialsForm = new FormGroup({
      name: new FormControl(this.testimonial.name || '', [Validators.minLength(4), Validators.required]),
      description: new FormControl(this.testimonial.description || '', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }
}
