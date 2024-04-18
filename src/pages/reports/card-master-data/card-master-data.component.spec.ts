import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMasterDataComponent } from './card-master-data.component';

describe('CardMasterDataComponent', () => {
  let component: CardMasterDataComponent;
  let fixture: ComponentFixture<CardMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMasterDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
