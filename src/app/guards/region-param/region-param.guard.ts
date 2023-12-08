import { CanActivateFn, Router } from '@angular/router';
import { catchError, of, map, tap } from 'rxjs';
import { ResourceService } from '@services/domain';
import { Resource } from '@models/domain/resource';
import { IRegion } from '@interfaces/dtos';
import { inject } from '@angular/core';

export const regionParamGuard: CanActivateFn = (route, routerSnapshot) => {
  const { region } = route.params;

  const router = inject(Router);
  const resourceService = inject(ResourceService<IRegion>).getProvider(Resource.REGION);
  const onInvalidRegion = () => of(false);

  const onRegion = (region: IRegion | boolean) =>
    typeof region === 'boolean' ? region : !!region;

  const onResult = (isValid: boolean) =>
    isValid ? isValid : router.createUrlTree(['/']);
  return !region
    ? router.createUrlTree(['/'])
    : resourceService
        .getResource(region)
        .pipe(catchError(onInvalidRegion), map(onRegion), map(onResult));
};
