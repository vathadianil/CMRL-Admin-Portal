import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvmComponent } from './tvm.component';

describe('TvmComponent', () => {
  let component: TvmComponent;
  let fixture: ComponentFixture<TvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
