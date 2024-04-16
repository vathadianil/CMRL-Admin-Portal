import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftStartReportComponent } from './shift-start-report.component';

describe('ShiftStartReportComponent', () => {
  let component: ShiftStartReportComponent;
  let fixture: ComponentFixture<ShiftStartReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftStartReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftStartReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
