import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { regionParamGuard } from './region-param.guard';

describe('regionParamGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => regionParamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
