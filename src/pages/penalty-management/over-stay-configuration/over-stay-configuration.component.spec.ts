import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverStayConfigurationComponent } from './over-stay-configuration.component';

describe('OverStayConfigurationComponent', () => {
  let component: OverStayConfigurationComponent;
  let fixture: ComponentFixture<OverStayConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverStayConfigurationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverStayConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
