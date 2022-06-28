import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  api_slides = 'https://ongapi.alkemy.org/api/slides';

  constructor(private http: HttpClient) { }

  getSlides() {
    return this.http.get(`${this.api_slides}?limit=3`);
  }
  
  updateSlide(data: any) {
    return this.http.put(`${this.api_slides}/${data.id}`, data);
  }
}
