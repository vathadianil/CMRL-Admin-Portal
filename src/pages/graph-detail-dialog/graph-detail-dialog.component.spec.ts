import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDetailDialogComponent } from './graph-detail-dialog.component';

describe('GraphDetailDialogComponent', () => {
  let component: GraphDetailDialogComponent;
  let fixture: ComponentFixture<GraphDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
