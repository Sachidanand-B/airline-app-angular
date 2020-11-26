import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightAirlineListComponent } from './in-flight-airline-list.component';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { StoresService } from 'src/app/core/store/stores.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DetailsSectionComponent', () => {
  let component: InFlightAirlineListComponent;
  let fixture: ComponentFixture<InFlightAirlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InFlightAirlineListComponent],
      providers: [
        { provide: ApplicationDataManagerService, useValue: {
          listenForApplicationData: () => of(''),
          listenFromServer: () => of(''),
        } },
        { provide: MatDialog, useValue: {} },
        { provide: StoresService, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
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
