import { pokedexResolver } from './pokedex.resolver';
import { ResolveFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('pokedexResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => pokedexResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
