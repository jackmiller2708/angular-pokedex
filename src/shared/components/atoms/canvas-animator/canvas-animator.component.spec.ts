import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAnimatorComponent } from './canvas-animator.component';

describe('CanvasAnimatorComponent', () => {
  let component: CanvasAnimatorComponent;
  let fixture: ComponentFixture<CanvasAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAnimatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanvasAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
