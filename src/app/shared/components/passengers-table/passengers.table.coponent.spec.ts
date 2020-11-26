import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersTableComponent } from './passengers.table.component';
import { MatDialog, MatTableModule, MatTableDataSource } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, ComponentRef } from '@angular/core';
import { YesNoPipe } from '../../pipes/yes-no.pipe';

describe('passengersTableComponent', () => {
  let component: PassengersTableComponent;
  let fixture: ComponentFixture<PassengersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [PassengersTableComponent, YesNoPipe],
      imports: [ MatTableModule ],
      providers: [
        {
          provide: MatDialog,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersTableComponent);
    component = fixture.componentInstance;
    component.rowData = new MatTableDataSource();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should filter the data', () => {
    const event = {value: 'let' };
    const expectedResult = { let: true };
    component.adminUse = false;
    component.filterData(event);
    expect(component.rowData.filter).toEqual(JSON.stringify(expectedResult));
  });

  it('should clear the filter', () => {
    const event = new Event('click');
    component.clearFilter(event);
    expect(component.defaultFilter).toEqual('');
  });
});
