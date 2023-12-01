import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 */
export interface IPokemonHeldItemVersion {
  /**
   * The version in which the item is held.
   */
  version: INamedAPIResource;

  /**
   * How often the item is held.
   */
  rarity: number;
}
