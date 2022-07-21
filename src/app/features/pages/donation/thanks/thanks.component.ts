import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  message!: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'Muchas gracias por tu donación!'
  }

}
