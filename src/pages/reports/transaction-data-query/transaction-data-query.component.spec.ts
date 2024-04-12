import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDataQueryComponent } from './transaction-data-query.component';

describe('TransactionDataQueryComponent', () => {
  let component: TransactionDataQueryComponent;
  let fixture: ComponentFixture<TransactionDataQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDataQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionDataQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
