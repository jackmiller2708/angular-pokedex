import { ErrorResponseResolverFn, ResponseError } from '@interfaces/application/errors';
import { Observable, EMPTY, catchError } from 'rxjs';
import { ResolveFn, Router } from '@angular/router';
import { NotFoundError } from '@models/application/errors';
import { PokedexService } from '@services/domain';
import { inject } from '@angular/core';

const errorResponseHandlerFactory = (router: Router): ErrorResponseResolverFn<Observable<any>> => {
  return (error: ResponseError) => {
    if (error instanceof NotFoundError) {
      router.navigate(['/']);
    }

    return EMPTY;
  };
};

export const pokedexResolver: ResolveFn<boolean> = (route, state) => {
  const router = inject(Router);

  return inject(PokedexService)
    .getResource(route.params['pokedex'])
    .pipe(catchError(errorResponseHandlerFactory(router)));
};
