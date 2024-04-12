import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabButtonFieldComponent } from './fab-button-field.component';

describe('FabButtonFieldComponent', () => {
  let component: FabButtonFieldComponent;
  let fixture: ComponentFixture<FabButtonFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabButtonFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabButtonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
