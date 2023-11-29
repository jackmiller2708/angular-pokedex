import { ResourceList, ResourceListQuery } from '../utilities';

export interface IResourceService<T> {
  /**
   * Gets the resource based on given id or name.
   * @param nameOrId the name or id of the resource.
   */
  getResource(nameOrId: string): T;

  /**
   * Gets a list of resource based on resource query.
   * @param query 
   */
  getResourceList(query?: ResourceListQuery): ResourceList<T>;
}
