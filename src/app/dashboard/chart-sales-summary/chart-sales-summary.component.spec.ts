import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSalesSummaryComponent } from './chart-sales-summary.component';

describe('ChartSalesSummaryComponent', () => {
  let component: ChartSalesSummaryComponent;
  let fixture: ComponentFixture<ChartSalesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSalesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSalesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
