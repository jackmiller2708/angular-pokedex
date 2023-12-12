import { unnamedSegmentGuard } from './unnamed-segment.guard';
import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

describe('unnamedSegmentGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      unnamedSegmentGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
