import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBoxBackofficeComponent } from './activity-box-backoffice.component';

describe('ActivityBoxBackofficeComponent', () => {
  let component: ActivityBoxBackofficeComponent;
  let fixture: ComponentFixture<ActivityBoxBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityBoxBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBoxBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
