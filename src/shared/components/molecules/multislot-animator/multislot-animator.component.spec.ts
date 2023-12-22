import { MultislotAnimatorComponent } from './multislot-animator.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MultislotAnimatorComponent', () => {
  let component: MultislotAnimatorComponent;
  let fixture: ComponentFixture<MultislotAnimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultislotAnimatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultislotAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
