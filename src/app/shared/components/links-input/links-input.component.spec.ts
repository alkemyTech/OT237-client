import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksInputComponent } from './links-input.component';

describe('LinksInputComponent', () => {
  let component: LinksInputComponent;
  let fixture: ComponentFixture<LinksInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
