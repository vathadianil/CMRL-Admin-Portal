import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeComponent } from './surcharge.component';

describe('SurchargeComponent', () => {
  let component: SurchargeComponent;
  let fixture: ComponentFixture<SurchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurchargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
