import { Breadcrumb as TBreadcrumb } from '@interfaces/application';
import { PokedexAlternateName } from '@models/domain/pokedex';
import { HelperService } from '@services/application';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { List } from 'immutable';

export const breadcrumbsResolver: ResolveFn<List<TBreadcrumb>> = ({ routeConfig, params }, { url }) => {
  const { router } = inject(HelperService);

  return router.generateBreadcrumbs(
    url.split('/').slice(1),
    router.getAltPathnameMap(
      { path: routeConfig?.path ?? '', params, url },
      { pokedex: PokedexAlternateName }
    )
  );
};
