import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [
    { name: 'Inicio', route: '/home' },
    // { name: 'Nosotros', route: '/about' },
    { name: 'Novedades', route: '/novedades' },
    { name: 'Actividades', route: '/activities' },
    { name: 'Contacto', route: '/contacto' },
    { name: 'Contribuye', route: '/contribuir' }
  ];
}
