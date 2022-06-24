import { SlideService } from './../../../../core/services/slide.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  form!: FormGroup;
  iterator: number = 0;
  pages: string[] = ["Presentation", "Slide 1", "Slide 2", "Slide 3"];
  fieldSlides: any = {
    text: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.pattern('(https?\:\/\/)?(www\.)?([a-z0-9]([a-z0-9]|(\-[a-z0-9]))*\.)+[a-z]+(\/[\-a-z_]+)*(\/[a-zA-Z0-9]+\.(jpg|png|jpeg|JPG|PNG|JPEG){1})')]]
  };

  constructor(
    private fb: FormBuilder, 
    private slideSvc: SlideService
    ) {
    this.form = this.fb.group({
      welcomeText: ['', [Validators.required, Validators.minLength(20)]],
      slide1: this.fb.group(this.fieldSlides),
      slide2: this.fb.group(this.fieldSlides),
      slide3: this.fb.group(this.fieldSlides),
    });
  }

  ngOnInit(): void {
    this.slideSvc.getSlides().subscribe({
      next: (res: any) => {
        let slides = res.data;
        for(let i=0; i<slides.length; i++) {
          let slideField = `slide${i+1}`;
          this.form.get(slideField)?.get('text')?.setValue(slides[i].name);
          this.form.get(slideField)?.get('image')?.setValue(slides[i].image);
        }
      },
    });
  }

  get welcomeText() {
    return this.form.get('welcomeText');
  }

  get textBySlide() {
    return this.form.get('slide' + this.iterator)?.get('text');
  }

  get imageBySlide() {
    return this.form.get('slide' + this.iterator)?.get('image');
  }

  checkControl(control: any, type: string): boolean {
    return control.hasError(type) && (control.touched || control.dirty);
  }

  onNextPage() {
    if(this.iterator == this.pages.length - 1) {
      if(this.form.invalid) {
        return;
      }
      console.log(this.form.value);
      this.form.reset();
      this.iterator = 0;
    } else this.iterator++;
  }

  onPrevPage() {
    if(this.iterator == 0) return;
    this.iterator--;
  }
}
