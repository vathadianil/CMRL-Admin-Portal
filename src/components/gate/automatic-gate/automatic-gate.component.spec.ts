import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticGateComponent } from './automatic-gate.component';

describe('AutomaticGateComponent', () => {
  let component: AutomaticGateComponent;
  let fixture: ComponentFixture<AutomaticGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomaticGateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomaticGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
