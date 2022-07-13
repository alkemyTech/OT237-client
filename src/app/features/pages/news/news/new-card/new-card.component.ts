import { Component, OnInit, Input } from '@angular/core';
import { Novedad } from 'src/app/features/interfaces';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  @Input() novedad!: Novedad;

  constructor() { }

  ngOnInit(): void {
  }

}
