import { ErrorResponseResolverFn, ResponseError } from '@interfaces/application/errors';
import { Observable, EMPTY, catchError, tap } from 'rxjs';
import { ResolveFn, Router } from '@angular/router';
import { NotFoundError } from '@models/application/errors';
import { PokedexService } from '@services/domain';
import { inject } from '@angular/core';
import { Pokedex } from '@interfaces/domain';

const errorResponseHandlerFactory = (router: Router): ErrorResponseResolverFn<Observable<any>> => {
  return (error: ResponseError) => {
    if (error instanceof NotFoundError) {
      router.navigate(['/']);
    }

    return EMPTY;
  };
};

export const pokedexResolver: ResolveFn<Pokedex> = (route, state) => {
  const resource = inject(PokedexService);
  const router = inject(Router);

  return resource
    .getResource(route.params['pokedex'])
    .pipe(
      resource.operators.extendPokemonEntries(),
      catchError(errorResponseHandlerFactory(router))
    );
};
