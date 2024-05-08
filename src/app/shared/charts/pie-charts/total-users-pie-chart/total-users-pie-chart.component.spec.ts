import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalUsersPieChartComponent } from './total-users-pie-chart.component';

describe('TotalUsersPieChartComponent', () => {
  let component: TotalUsersPieChartComponent;
  let fixture: ComponentFixture<TotalUsersPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalUsersPieChartComponent]
    });
    fixture = TestBed.createComponent(TotalUsersPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
