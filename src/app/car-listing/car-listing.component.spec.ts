import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingComponent } from './car-listing.component';

describe('CarListingCopmponent', () => {
  let component: CarListingComponent;
  let fixture: ComponentFixture<CarListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarListingComponent]
    });
    fixture = TestBed.createComponent(CarListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
