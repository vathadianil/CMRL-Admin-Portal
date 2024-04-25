import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationMonitoringComponent } from './station-monitoring.component';

describe('StationMonitoringComponent', () => {
  let component: StationMonitoringComponent;
  let fixture: ComponentFixture<StationMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationMonitoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
