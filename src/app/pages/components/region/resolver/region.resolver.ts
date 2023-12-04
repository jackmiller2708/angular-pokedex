import { ErrorResponseResolverFn, ResponseError } from '@interfaces/application/errors';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ResolveFn, Router } from '@angular/router';
import { RegionService } from '@services/domain';
import { NotFoundError } from '@models/application/errors';
import { inject } from '@angular/core';
import { Region } from '@interfaces/domain';

const errorResponseHandlerFactory = (router: Router): ErrorResponseResolverFn<Observable<any>> => {
  return (error: ResponseError) => {
    if (error instanceof NotFoundError) {
      router.navigate(['/']);
    }

    return EMPTY;
  };
};

export const regionResolver: ResolveFn<Region> = (route, state) => {
  const router = inject(Router);

  return inject(RegionService)
    .getResource(route.params['region'])
    .pipe(catchError(errorResponseHandlerFactory(router)));
};
