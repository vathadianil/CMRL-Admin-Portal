import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSequenceComponent } from './transaction-sequence.component';

describe('TransactionSequenceComponent', () => {
  let component: TransactionSequenceComponent;
  let fixture: ComponentFixture<TransactionSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionSequenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
