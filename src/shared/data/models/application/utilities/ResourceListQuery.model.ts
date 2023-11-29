import { IResourceListQuery } from '@interfaces/application/utilities';
import { Record } from 'immutable';

export const ResourceListQuery = Record<IResourceListQuery>({
  limit: 1,
  offset: 0,
});
