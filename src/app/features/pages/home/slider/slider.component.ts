import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

export interface ICarouselItem {
  id: number;
  title?: {
      first: string;
      second: string;
  };
  subtitle?: string;
  link?: string;
  image: string;
  order?: number;
  marginLeft?: number;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];
  @Input() delay: number = 5000;

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  private contador!: Observable<number>;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
    this.contador = interval(this.delay);
    this.contador.subscribe({
      next: () => this.setNext()
    });
   }

  ngOnInit() {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find(i => i.id === 0)!.marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }

}
