import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkeltonComponent } from './dashboard-skelton.component';

describe('DashboardSkeltonComponent', () => {
  let component: DashboardSkeltonComponent;
  let fixture: ComponentFixture<DashboardSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSkeltonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
