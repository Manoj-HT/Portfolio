import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCVComponent } from './resume-cv.component';

describe('ResumeCVComponent', () => {
  let component: ResumeCVComponent;
  let fixture: ComponentFixture<ResumeCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
