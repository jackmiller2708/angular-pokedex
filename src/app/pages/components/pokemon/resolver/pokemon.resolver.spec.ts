import { pokemonResolver } from './pokemon.resolver';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('pokemonResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => pokemonResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
