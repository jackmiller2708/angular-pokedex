import { List, RecordOf } from 'immutable';

export interface IResourceList<T> {
  count: number;
  results: List<T>;
}

export type ResourceList<T> = RecordOf<IResourceList<T>>;
