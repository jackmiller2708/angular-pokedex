import { Breadcrumb as TBreadcrumb } from '@interfaces/application';
import { PokedexAlternateName } from '@models/domain/pokedex';
import { HelperService } from '@services/application';
import { Breadcrumb } from '@models/application/utilities';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { List } from 'immutable';

export const breadcrumbsResolver: ResolveFn<List<TBreadcrumb>> = (route, state) => { 
  const getPath = ({ path }: TBreadcrumb, currPath: string): string => {
    return `${path === '/' ? '' : path}/${currPath}`;
  };

  const { routeConfig, params } = route;
  const [, ...urls] = state.url.split('/');

  const pathAliasMap = inject(HelperService).router.getAltPathnameMap(
    { path: routeConfig?.path ?? '', params, url: state.url },
    { pokedex: PokedexAlternateName }
  );

  const breadcrumbs = urls.reduce<List<TBreadcrumb>>((acc, path) => {
    const fullPath = getPath(acc.last(), path);

    return acc.push(
      Breadcrumb({
        name: pathAliasMap.has(fullPath)
          ? pathAliasMap.get(fullPath)
          : path,
        path: fullPath,
      })
    );
  }, List([Breadcrumb()]));

  return breadcrumbs.filterNot(({ name }) => name === '-');
};
