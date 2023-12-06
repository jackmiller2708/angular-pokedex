import { regionResolver } from './region.resolver';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Region } from '@interfaces/domain';

describe('regionResolver', () => {
  const executeResolver: ResolveFn<Region> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => regionResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
