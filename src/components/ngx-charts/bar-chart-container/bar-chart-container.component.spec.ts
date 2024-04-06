import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartContainerComponent } from './bar-chart-container.component';

describe('BarChartContainerComponent', () => {
  let component: BarChartContainerComponent;
  let fixture: ComponentFixture<BarChartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
