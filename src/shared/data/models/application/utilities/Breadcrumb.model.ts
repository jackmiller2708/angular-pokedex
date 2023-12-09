import { IBreadcrumb } from '@interfaces/application';
import { Record } from 'immutable';

export const Breadcrumb = Record<IBreadcrumb>({
  name: 'home',
  path: '/',
});
