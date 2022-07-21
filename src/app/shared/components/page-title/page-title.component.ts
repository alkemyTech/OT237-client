import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() title!: string
  @Input() image!: string
  defaultImage!: string

  constructor() { }

  ngOnInit(): void {
    this.defaultImage = '../../../assets/front-page.png';
  }

}
