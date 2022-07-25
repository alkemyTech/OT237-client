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
  updated_at?: Date;
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
  public editMode = false;
  public base64Image!: string;
  public testimonialId!: number;

  public testimonial: Testimonial = { }

  constructor(private testimonialsService: TestimonialsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.isSubmitted = false;
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.testimonialId = params.id;
      this.getTestimonial(params.id);
    }
  }

  get f() { return this.testimonialsForm.controls; }

  private getTestimonial(id: number) {
  this.testimonialsService.getTestimonial(id)
      .subscribe({
        next: (data: any) => {
          this.testimonial = data.data
          this.editMode = true;
          this.buildForm();
        },
        error: e => {
          this.router.navigate(["/"])
        }
      })
  }

  /**
   * image processing after selection
   * @param files 
   */
  public processImage(files: FileList | null = null): void {
    if (files) {
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }

  /**
   * transform image to Base64 string
   * @param readerEvt 
   */
  private _handleReaderLoaded(readerEvt: any): void {
    var binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted = true; 
    
    //editing existing testimonial behaviour
    if (this.testimonialsForm.get("name")?.errors || this.testimonialsForm.get("description")?.errors) {
      return;
    }
    if (this.editMode) {
      let editTestimonialObject: { name?: string, description?: string, image?: string } = {
        name: this.testimonialsForm.get("name")?.value
      }
      if (this.testimonialsForm.get("description")?.value !== this.testimonial.description) {
        editTestimonialObject.description = this.testimonialsForm.get("description")?.value
      }
      if (this.base64Image) {
        editTestimonialObject.image = `data:image/jpeg;base64,${this.base64Image}`;
      }
      console.log(editTestimonialObject)
      this.testimonialsService.editTestimonial(this.testimonialId, editTestimonialObject)
      .subscribe(() => this.getTestimonial(this.testimonialId))
      return
    }

    //adding new testimonial behaviour
    if (this.testimonialsForm.invalid) {
      return;
    }
    let addTestimonialObject: { name: string, description: string, image: string } = { 
      name: this.testimonialsForm.controls.name.value,  
      description: this.testimonialsForm.controls.description.value,
      image: `data:image/jpeg;base64,${this.base64Image}`
    };
    this.testimonialsService.addTestimonial(addTestimonialObject)
      .subscribe(
        //TODO: redirect user to testimonials view
      )
  }

  private buildForm(): void {
    this.testimonialsForm = new FormGroup({
      name: new FormControl(this.testimonial.name || '', [Validators.minLength(4), Validators.required]),
      description: new FormControl(this.testimonial.description || '', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }

  clean(){
    this.testimonialsForm.controls.name.setValue('');
  }
}
