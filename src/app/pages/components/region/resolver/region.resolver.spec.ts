import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { regionResolver } from './region.resolver';

describe('regionResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => regionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
