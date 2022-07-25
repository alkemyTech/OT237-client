import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('loginToken')){
      const userData: any  = JSON.parse(localStorage.getItem('loginToken')!);
      const role = userData.data.user.role_id 
      if (role === 1) { 
        this.items.push( { name: 'Backoffice', route: '/backoffice' })
      }
    }
  }


  items: any[] = [
    { name: 'Inicio', route: '/home' },
    // { name: 'Nosotros', route: '/about' },
    { name: 'Novedades', route: '/novedades' },
    { name: 'Actividades', route: '/activities' },
    { name: 'Contacto', route: '/contacto' },
    { name: 'Colaborar', route: '/contribuir' }
  ];
}
