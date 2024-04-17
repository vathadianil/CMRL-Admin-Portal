import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidershipReportComponent } from './ridership-report.component';

describe('RidershipReportComponent', () => {
  let component: RidershipReportComponent;
  let fixture: ComponentFixture<RidershipReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RidershipReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RidershipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
