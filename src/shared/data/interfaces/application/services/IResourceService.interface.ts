import { ResourceList } from '../utilities';

export interface IResourceService<T> {
  getResource(nameOrId: string): T;
  getResourceList(): ResourceList<T>;
}
