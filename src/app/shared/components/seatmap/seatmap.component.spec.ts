import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatmapComponent } from './seatmap.component';
import { MatDialog } from '@angular/material';

describe('SeatmapComponent', () => {
  let component: SeatmapComponent;
  let fixture: ComponentFixture<SeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatmapComponent ],
      providers: [{ provide: MatDialog, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
