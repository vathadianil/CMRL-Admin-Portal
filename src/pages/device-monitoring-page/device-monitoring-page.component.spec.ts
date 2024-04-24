import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMonitoringPageComponent } from './device-monitoring-page.component';

describe('DeviceMonitoringPageComponent', () => {
  let component: DeviceMonitoringPageComponent;
  let fixture: ComponentFixture<DeviceMonitoringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceMonitoringPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceMonitoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
