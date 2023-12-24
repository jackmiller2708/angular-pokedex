import { NoopAnimatorDirective } from './noop-animator.directive';
import { TestBed } from '@angular/core/testing';

xdescribe('NoopAnimatorDirective', () => {
  let directive: NoopAnimatorDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoopAnimatorDirective],
    });

    directive = TestBed.inject(NoopAnimatorDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
