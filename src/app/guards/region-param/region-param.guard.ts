import { CanActivateFn, Router } from '@angular/router';
import { catchError, of, map } from 'rxjs';
import { RegionService } from '@services/domain';
import { inject } from '@angular/core';
import { Region } from '@interfaces/domain';

export const regionParamGuard: CanActivateFn = (route, routerSnapshot) => {
  const { region } = route.params;

  const router = inject(Router);
  const onInvalidRegion = () => of(false);

  const onRegion = (region: Region | boolean) =>
    typeof region === 'boolean' ? region : !!region;

  const onResult = (isValid: boolean) =>
    isValid ? isValid : router.createUrlTree(['/']);

  return !region
    ? false
    : inject(RegionService)
        .getResource(region)
        .pipe(catchError(onInvalidRegion), map(onRegion), map(onResult));
};
