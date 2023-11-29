import { RecordOf } from 'immutable';

export interface IResourceListQuery {
  limit: number;
  offset: number;
}

export type ResourceListQuery = RecordOf<IResourceListQuery>;
