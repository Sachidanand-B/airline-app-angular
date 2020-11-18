import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightpassengerDetailComponent } from './in-flight-passenger-detail.component';

describe('passengerDetailComponent', () => {
  let component: InflightpassengerDetailComponent;
  let fixture: ComponentFixture<InflightpassengerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InflightpassengerDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightpassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
