import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  api_slides: string = 'https://ongapi.alkemy.org/api/slides';

  constructor(private http: HttpClient) { }

  getSlides() {
    return this.http.get(this.api_slides);
  }

  getSlideById(id: number) {
    return this.http.get(`${this.api_slides}/${id}`);
  }

  create(slide: any) {
    return this.http.post(this.api_slides, slide);
  }

  update(slide: any) {
    return this.http.put(`${this.api_slides}/${slide.id}`, slide);
  }

  delete(id: number) {
    return this.http.delete(`${this.api_slides}/${id}`);
  }

}
