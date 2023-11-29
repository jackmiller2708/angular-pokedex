import { ResourceList, ResourceListQuery } from '../utilities';
import { Observable } from 'rxjs';

export interface IResourceService<T> {
  /**
   * Gets the resource based on given id or name.
   * @param nameOrId the name or id of the resource.
   */
  getResource(nameOrId: string): Observable<T>;

  /**
   * Gets a list of resource based on resource query.
   * @param query
   */
  getResourceList(query?: ResourceListQuery): Observable<ResourceList<T>>;
}
