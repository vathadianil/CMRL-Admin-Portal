import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDailogComponent } from './report-dailog.component';

describe('ReportDailogComponent', () => {
  let component: ReportDailogComponent;
  let fixture: ComponentFixture<ReportDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
