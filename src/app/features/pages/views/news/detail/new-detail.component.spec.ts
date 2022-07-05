import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetailComponent } from './new-detail.component';

describe('NewDetailComponent', () => {
  let component: NewDetailComponent;
  let fixture: ComponentFixture<NewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
