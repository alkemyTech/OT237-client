import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListEditComponent } from './news-list-edit.component';

describe('NewsListEditComponent', () => {
  let component: NewsListEditComponent;
  let fixture: ComponentFixture<NewsListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
