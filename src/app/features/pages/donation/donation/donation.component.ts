import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

  text!: string;
  formattedAmount!: any;
  amount!: any;

  constructor() { }

  ngOnInit(): void {
    this.text = 'Realizar Donación';
  }

}