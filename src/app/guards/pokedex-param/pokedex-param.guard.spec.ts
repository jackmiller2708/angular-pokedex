import { pokedexParamGuard } from './pokedex-param.guard';
import { CanActivateFn } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('pokedexParamGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => pokedexParamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
