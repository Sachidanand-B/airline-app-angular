import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AirlineListComponent } from './airline-list.component';
import { ApplicationDataManagerService } from 'src/app/core/services/app-data-manager.service';
import { MatDialog } from '@angular/material';
import { StoresService } from 'src/app/core/store/stores.service';
import { of } from 'rxjs';

describe('DetailsSectionComponent', () => {
  let component: AirlineListComponent;
  let fixture: ComponentFixture<AirlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AirlineListComponent],
      providers: [
        { provide: ApplicationDataManagerService, useValue: {
          listenForApplicationData: () => of(''),
          listenFromServer: () => of(''),
        } },
        { provide: MatDialog, useValue: {} },
        { provide: StoresService, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the flight details', () => {
    const spyOnListenFromServer = spyOn(TestBed.get(ApplicationDataManagerService), 'listenFromServer');
    component.getFlightDetails('as23', 2);
    expect(spyOnListenFromServer).toHaveBeenCalled();
  });

  it('should change toggle State', () => {
    component.currentToggleValue = true;
    const event = new Event('click');
    component.toggleState(event);
    expect(component.currentToggleValue).toBeFalsy();
  });

  it('should display switch to view seat map layout', () => {
    const retValue = component.displayToggleState(true);
    expect(retValue).toEqual('Switch to view seat map layout');
  });

  it('should display switch to view passengers list', () => {
    const retValue = component.displayToggleState(false);
    expect(retValue).toEqual('Switch to view passengers list');
  });
});
