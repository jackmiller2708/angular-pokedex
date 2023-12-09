import { Breadcrumb as TBreadcrumb } from '@interfaces/application';
import { Breadcrumb } from '@models/application/utilities';
import { ResolveFn } from '@angular/router';
import { List } from 'immutable';

export const breadcumbResolver: ResolveFn<List<TBreadcrumb>> = (route, state) => {
  const getPath = ({ path }: TBreadcrumb) => (path === '/' ? '' : path);

  return route.url.reduce<List<TBreadcrumb>>((acc, { path }) => {
    return acc.push(Breadcrumb({ name: path, path: getPath(acc.last()) }));
  }, List([Breadcrumb()]));
};
