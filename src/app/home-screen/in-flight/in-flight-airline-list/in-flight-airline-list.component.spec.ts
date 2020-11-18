import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightAirlineListComponent } from './in-flight-airline-list.component';

describe('DetailsSectionComponent', () => {
  let component: InFlightAirlineListComponent;
  let fixture: ComponentFixture<InFlightAirlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InFlightAirlineListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFlightAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
