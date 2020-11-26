import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailComponent } from './passenger-detail.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('passengerDetailComponent', () => {
  let component: PassengerDetailComponent;
  let fixture: ComponentFixture<PassengerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDetailComponent],
      providers: [
        { provide: MatDialogRef, userValue: {} },
        { provide: ApplicationDataManagerService, userValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            passengerDetails: {
              checkedIn: true
            }
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
