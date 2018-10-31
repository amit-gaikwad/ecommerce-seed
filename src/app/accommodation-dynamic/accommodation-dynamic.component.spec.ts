import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationDynamicComponent } from './accommodation-dynamic.component';

describe('AccommodationDynamicComponent', () => {
  let component: AccommodationDynamicComponent;
  let fixture: ComponentFixture<AccommodationDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
