import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeChartContaienrComponent } from './gauge-chart-contaienr.component';

describe('GaugeChartContaienrComponent', () => {
  let component: GaugeChartContaienrComponent;
  let fixture: ComponentFixture<GaugeChartContaienrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaugeChartContaienrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaugeChartContaienrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
