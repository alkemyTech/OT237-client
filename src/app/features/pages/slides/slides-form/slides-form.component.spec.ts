import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesFormComponent } from './slides-form.component';

describe('SlidesFormComponent', () => {
  let component: SlidesFormComponent;
  let fixture: ComponentFixture<SlidesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
