import { IAPIResource } from '.';

export interface INamedAPIResource extends IAPIResource {
  /**
   * The name of the referenced resource.
   */
  name: string;
}
