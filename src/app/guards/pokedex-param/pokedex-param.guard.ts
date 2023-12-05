import { CanActivateFn, Router } from '@angular/router';
import { of, catchError, map } from 'rxjs';
import { PokedexService } from '@services/domain';
import { Pokedex } from '@interfaces/domain';
import { inject } from '@angular/core';

export const pokedexParamGuard: CanActivateFn = (route, routerSnapshot) => {
  const { pokedex } = route.params;

  const router = inject(Router);
  const onInvalidPokedex = () => of(false);

  const onPokedex = (region: Pokedex | boolean) =>
    typeof region === 'boolean' ? region : !!region;

  const onResult = (isValid: boolean) =>
    isValid ? isValid : router.createUrlTree(['/']);

  return !pokedex
    ? false
    : inject(PokedexService)
        .getResource(pokedex)
        .pipe(catchError(onInvalidPokedex), map(onPokedex), map(onResult));
};
