import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateCabinateComponent } from './gate-cabinate.component';

describe('GateCabinateComponent', () => {
  let component: GateCabinateComponent;
  let fixture: ComponentFixture<GateCabinateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GateCabinateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GateCabinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
