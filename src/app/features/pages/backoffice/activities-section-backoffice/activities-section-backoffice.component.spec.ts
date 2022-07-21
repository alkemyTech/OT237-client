import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSectionBackofficeComponent } from './activities-section-backoffice.component';

describe('ActivitiesSectionBackofficeComponent', () => {
  let component: ActivitiesSectionBackofficeComponent;
  let fixture: ComponentFixture<ActivitiesSectionBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesSectionBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSectionBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
