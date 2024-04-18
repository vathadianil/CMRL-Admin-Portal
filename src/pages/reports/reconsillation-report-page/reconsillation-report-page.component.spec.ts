import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconsillationReportPageComponent } from './reconsillation-report-page.component';

describe('ReconsillationReportPageComponent', () => {
  let component: ReconsillationReportPageComponent;
  let fixture: ComponentFixture<ReconsillationReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconsillationReportPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReconsillationReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
