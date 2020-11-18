import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassengerComponent } from './new-passenger.component';

describe('passengerDetailComponent', () => {
  let component: NewPassengerComponent;
  let fixture: ComponentFixture<NewPassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPassengerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
