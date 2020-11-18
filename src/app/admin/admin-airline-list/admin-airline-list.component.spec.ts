import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAirlineListComponent } from './admin-airline-list.component';

describe('DetailsSectionComponent', () => {
  let component: AdminAirlineListComponent;
  let fixture: ComponentFixture<AdminAirlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAirlineListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAirlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
