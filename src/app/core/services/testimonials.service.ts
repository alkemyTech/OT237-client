import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  API_URI: string = `${environment.url}testimonials`

  constructor(private http: HttpClient) { }

  public addTestimonial(testimonial: any) {
    return this.http.post(`${this.API_URI}`, testimonial);
  }

  public editTestimonial(id: number, testimonial: any) {
    return this.http.put(`${this.API_URI}/${id}`, testimonial)
  }

  public getTestimonial(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }
}
