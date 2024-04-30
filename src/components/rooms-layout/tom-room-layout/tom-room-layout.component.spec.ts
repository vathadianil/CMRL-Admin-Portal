import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomRoomLayoutComponent } from './tom-room-layout.component';

describe('TomRoomLayoutComponent', () => {
  let component: TomRoomLayoutComponent;
  let fixture: ComponentFixture<TomRoomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomRoomLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomRoomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
