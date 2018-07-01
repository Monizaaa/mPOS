import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBestSalesComponent } from './chart-best-sales.component';

describe('ChartBestSalesComponent', () => {
  let component: ChartBestSalesComponent;
  let fixture: ComponentFixture<ChartBestSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBestSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBestSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
