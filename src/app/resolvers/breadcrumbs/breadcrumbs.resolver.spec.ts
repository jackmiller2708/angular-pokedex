import { breadcrumbsResolver } from './breadcrumbs.resolver';
import { Breadcrumb } from '@interfaces/application';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { List } from 'immutable';

describe('breadcrumbsResolver', () => {
  const executeResolver: ResolveFn<List<Breadcrumb>> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => breadcrumbsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
