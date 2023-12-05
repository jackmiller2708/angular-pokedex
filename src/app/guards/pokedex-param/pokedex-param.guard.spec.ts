import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { pokedexParamGuard } from './pokedex-param.guard';

describe('pokedexParamGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pokedexParamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
