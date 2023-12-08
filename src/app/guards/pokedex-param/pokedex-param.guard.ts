import { CanActivateFn, Router } from '@angular/router';
import { of, catchError, map } from 'rxjs';
import { ResourceService } from '@services/domain';
import { Resource } from '@models/domain/resource';
import { IPokedex } from '@interfaces/dtos';
import { inject } from '@angular/core';

export const pokedexParamGuard: CanActivateFn = (route, routerSnapshot) => {
  const { pokedex } = route.params;

  const router = inject(Router);
  const resourceService = inject(ResourceService<IPokedex>).getProvider(Resource.POKEDEX);
  const onInvalidPokedex = () => of(false);

  const onPokedex = (pokedex: IPokedex | boolean) =>
    typeof pokedex === 'boolean' ? pokedex : !!pokedex;

  const onResult = (isValid: boolean) =>
    isValid ? isValid : router.createUrlTree(['/']);

  return !pokedex
    ? router.createUrlTree(['/'])
    : resourceService
        .getResource(pokedex)
        .pipe(catchError(onInvalidPokedex), map(onPokedex), map(onResult));
};
