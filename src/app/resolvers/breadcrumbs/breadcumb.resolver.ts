import { Breadcrumb as TBreadcrumb } from '@interfaces/application';
import { Breadcrumb } from '@models/application/utilities';
import { ResolveFn } from '@angular/router';
import { List } from 'immutable';

export const breadcumbResolver: ResolveFn<List<TBreadcrumb>> = (_, state) => {
  const [, ...urls] = state.url.split('/');

  const getPath = ({ path }: TBreadcrumb, currPath: string): string => {
    return `${path === '/' ? '' : path}/${currPath}`;
  };

  const breadcrumbs = urls.reduce<List<TBreadcrumb>>((acc, path) => {
    return acc.push(
      Breadcrumb({
        name: path,
        path: getPath(acc.last(), path),
      })
    );
  }, List([Breadcrumb()]));

  return breadcrumbs.filterNot(({ name }) => name === '-');
};
