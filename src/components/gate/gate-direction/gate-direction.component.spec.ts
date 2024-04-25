import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateDirectionComponent } from './gate-direction.component';

describe('GateDirectionComponent', () => {
  let component: GateDirectionComponent;
  let fixture: ComponentFixture<GateDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GateDirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GateDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
