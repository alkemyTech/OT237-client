import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle: string = 'Contacto'

  email: string = 'somosfundacionmas@gmail.com'
  instagram: string = 'SomosMas'
  facebook: string = 'Somos Más'
  phone: string = '1160112988'

  constructor() { }

  ngOnInit(): void {
  }

}
