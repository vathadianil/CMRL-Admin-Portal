import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySummaryReportPageComponent } from './entry-summary-report-page.component';

describe('EntrySummaryReportPageComponent', () => {
  let component: EntrySummaryReportPageComponent;
  let fixture: ComponentFixture<EntrySummaryReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrySummaryReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrySummaryReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
