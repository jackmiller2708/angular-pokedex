import { NoopAnimatorDirective } from './noop-animator.directive';
import { provideAnimation } from './providers';
import { TestBed } from '@angular/core/testing';

xdescribe('NoopAnimatorDirective', () => {
  let directive: NoopAnimatorDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAnimation(), NoopAnimatorDirective],
    });

    directive = TestBed.inject(NoopAnimatorDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
