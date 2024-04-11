import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartContainerComponent } from './pie-chart-container.component';

describe('PieChartContainerComponent', () => {
  let component: PieChartContainerComponent;
  let fixture: ComponentFixture<PieChartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PieChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
