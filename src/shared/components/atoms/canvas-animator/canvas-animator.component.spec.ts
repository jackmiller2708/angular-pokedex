import { CanvasAnimatorComponent } from './canvas-animator.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CanvasAnimatorComponent', () => {
  let component: CanvasAnimatorComponent;
  let fixture: ComponentFixture<CanvasAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasAnimatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CanvasAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
