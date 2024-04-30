import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcDeviceManagementPageComponent } from './edc-device-management-page.component';

describe('EdcDeviceManagementPageComponent', () => {
  let component: EdcDeviceManagementPageComponent;
  let fixture: ComponentFixture<EdcDeviceManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdcDeviceManagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdcDeviceManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
