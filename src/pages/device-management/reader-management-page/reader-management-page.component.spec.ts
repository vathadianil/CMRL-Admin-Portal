import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderManagementPageComponent } from './reader-management-page.component';

describe('ReaderManagementPageComponent', () => {
  let component: ReaderManagementPageComponent;
  let fixture: ComponentFixture<ReaderManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaderManagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaderManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
