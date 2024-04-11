import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSkeltonComponent } from './ngx-skelton.component';

describe('NgxSkeltonComponent', () => {
  let component: NgxSkeltonComponent;
  let fixture: ComponentFixture<NgxSkeltonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSkeltonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSkeltonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
