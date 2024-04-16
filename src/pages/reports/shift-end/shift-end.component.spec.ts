import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEndComponent } from './shift-end.component';

describe('ShiftEndComponent', () => {
  let component: ShiftEndComponent;
  let fixture: ComponentFixture<ShiftEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
