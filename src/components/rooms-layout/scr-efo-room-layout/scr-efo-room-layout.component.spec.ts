import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrEfoRoomLayoutComponent } from './scr-efo-room-layout.component';

describe('ScrEfoRoomLayoutComponent', () => {
  let component: ScrEfoRoomLayoutComponent;
  let fixture: ComponentFixture<ScrEfoRoomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrEfoRoomLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrEfoRoomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
