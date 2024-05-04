import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEndPopUpComponent } from './shift-end-pop-up.component';

describe('ShiftEndPopUpComponent', () => {
  let component: ShiftEndPopUpComponent;
  let fixture: ComponentFixture<ShiftEndPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftEndPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShiftEndPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
