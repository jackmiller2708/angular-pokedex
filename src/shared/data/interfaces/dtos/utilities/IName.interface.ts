import { INamedAPIResource } from '@interfaces/dtos';

export interface IName {
  /**
   * The localized name for an API resource in a specific language.
   */
  name: string;

  /**
   * The language this name is in.
   */
  language: INamedAPIResource;
}
