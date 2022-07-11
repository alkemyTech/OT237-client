import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {

  defaultImage: string = "https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif";
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
