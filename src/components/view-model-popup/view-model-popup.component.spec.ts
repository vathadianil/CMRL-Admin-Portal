import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModelPopupComponent } from './view-model-popup.component';

describe('ViewModelPopupComponent', () => {
  let component: ViewModelPopupComponent;
  let fixture: ComponentFixture<ViewModelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModelPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewModelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
