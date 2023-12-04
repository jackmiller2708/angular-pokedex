import { catchError, EMPTY } from 'rxjs';
import { ResolveFn, Router } from '@angular/router';
import { IResponseError } from '@interfaces/application/errors';
import { RegionService } from '@services/domain';
import { NotFoundError } from '@models/application/errors';
import { RecordOf } from 'immutable';
import { inject } from '@angular/core';
import { Region } from '@interfaces/domain';

export const regionResolver: ResolveFn<Region> = (route, state) => {
  const router = inject(Router);
  const handleResponseError = (error: RecordOf<IResponseError>) => {
    if (error instanceof NotFoundError) {
      router.navigate(['/']);
    }

    return EMPTY;
  };

  return inject(RegionService)
    .getResource(route.params['region'])
    .pipe(catchError(handleResponseError));
};
