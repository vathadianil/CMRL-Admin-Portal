import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitSummaryReportPageComponent } from './exit-summary-report-page.component';

describe('ExitSummaryReportPageComponent', () => {
  let component: ExitSummaryReportPageComponent;
  let fixture: ComponentFixture<ExitSummaryReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitSummaryReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExitSummaryReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
