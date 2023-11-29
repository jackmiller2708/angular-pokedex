import { IResourceList } from '@interfaces/application/utilities';
import { Record, List } from 'immutable';

export function ResourceListFactory<T>(): Record.Factory<IResourceList<T>> {
  return Record<IResourceList<T>>({
    count: 0,
    results: List(),
  });
}
