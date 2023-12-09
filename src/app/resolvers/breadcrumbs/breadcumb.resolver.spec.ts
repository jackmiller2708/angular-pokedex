import { breadcumbResolver } from './breadcumb.resolver';
import { Breadcrumb } from '@interfaces/application';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { List } from 'immutable';

describe('breadcumbResolver', () => {
  const executeResolver: ResolveFn<List<Breadcrumb>> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      breadcumbResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
