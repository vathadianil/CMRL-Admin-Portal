import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcEfoRoomLayoutComponent } from './src-efo-room-layout.component';

describe('SrcEfoRoomLayoutComponent', () => {
  let component: SrcEfoRoomLayoutComponent;
  let fixture: ComponentFixture<SrcEfoRoomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrcEfoRoomLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrcEfoRoomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
