import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEndTableComponent } from './shift-end-table.component';

describe('ShiftEndTableComponent', () => {
  let component: ShiftEndTableComponent;
  let fixture: ComponentFixture<ShiftEndTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftEndTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftEndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
