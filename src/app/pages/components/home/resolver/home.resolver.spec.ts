import { ResourceList } from '@interfaces/application';
import { homeResolver } from './home.resolver';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Region } from '@interfaces/domain';

describe('homeResolver', () => {
  const executeResolver: ResolveFn<ResourceList<Region>> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => homeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
