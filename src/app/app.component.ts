import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [
    { name: 'Inicio', route: '/' },
    { name: 'Nosotros', route: '/about' },
    { name: 'Novedades', route: '/news' },
    { name: 'Testimonios', route: '/testimonials' },
    { name: 'Contacto', route: '/contact' },
    { name: 'Contribuye', route: '/share' }
  ];
}
