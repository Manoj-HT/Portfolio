import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemerComponent } from './themer.component';

describe('ThemerComponent', () => {
  let component: ThemerComponent;
  let fixture: ComponentFixture<ThemerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
