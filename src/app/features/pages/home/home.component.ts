import { SlideService } from './../../../core/services/slide.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from './slider/slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: ICarouselItem[] = [];
  items: any[] = [
    { name: 'Inicio', route: '/' },
    { name: 'Nosotros', route: '/about' },
    { name: 'Novedades', route: '/news' },
    { name: 'Testimonios', route: '/testimonials' },
    { name: 'Contacto', route: '/contact' },
    { name: 'Contribuye', route: '/share' }
  ];
  
  constructor(private slideSvc: SlideService) {
  }

  ngOnInit(): void {
    this.slideSvc.getSlides().subscribe({
      next: (res: any) => {
        for(let slide of res.data) {
          let length = slide.name.length;
          this.slides.push({
            id: slide.id,
            title: {
              first: slide.name.substring(0, Math.round(length/2)),
              second: slide.name.substring(Math.round(length/2))
            },
            subtitle: slide.description,
            image: slide.image
          });
        }
      },
      error: (err) => console.log(err)
    });
  }

}
