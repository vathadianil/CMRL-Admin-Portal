import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesComponent } from './lines.component';

describe('LinesComponent', () => {
  let component: LinesComponent;
  let fixture: ComponentFixture<LinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
