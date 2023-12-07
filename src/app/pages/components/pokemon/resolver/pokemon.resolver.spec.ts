import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { TestUtilitiesService } from '@services/application';
import { pokemonResolver } from './pokemon.resolver';
import { TestBed } from '@angular/core/testing';

describe('pokemonResolver', () => {
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;

  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => pokemonResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestUtilitiesService],
    });

    const testUtils = TestBed.inject(TestUtilitiesService);

    route = testUtils.createActivatedRouteSnapshot({});
    state = testUtils.createRouterStateSnapshot();
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should return true', () => {
    expect(executeResolver(route, state)).toBe(true);
  });
});
