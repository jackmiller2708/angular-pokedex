import { regionParamGuard } from './region-param.guard';
import { CanActivateFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('regionParamGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => regionParamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
