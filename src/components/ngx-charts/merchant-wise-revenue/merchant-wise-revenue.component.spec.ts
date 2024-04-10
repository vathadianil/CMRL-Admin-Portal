import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantWiseRevenueComponent } from './merchant-wise-revenue.component';

describe('MerchantWiseRevenueComponent', () => {
  let component: MerchantWiseRevenueComponent;
  let fixture: ComponentFixture<MerchantWiseRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantWiseRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerchantWiseRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
