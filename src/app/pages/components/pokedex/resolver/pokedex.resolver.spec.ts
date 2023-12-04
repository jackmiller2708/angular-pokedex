import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { pokedexResolver } from './pokedex.resolver';

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
