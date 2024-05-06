import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataQueryComponent } from './stock-data-query.component';

describe('StockDataQueryComponent', () => {
  let component: StockDataQueryComponent;
  let fixture: ComponentFixture<StockDataQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockDataQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockDataQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
