import { IPokemonHeldItemVersion } from './IPokemonHeldItemVersion.interface';
import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * An item is an object in the games which the player can pick up, 
 * keep in their bag, and use in some manner. They have various uses, 
 * including healing, powering up, helping catch Pokémon, or to 
 * access a new area.
 */
export interface IPokemonHeldItem {
  /**
   * The item the referenced Pokémon holds.
   */
  item: INamedAPIResource;

  /**
   * The details of the different versions in which the item is held.
   */
  version_details: IPokemonHeldItemVersion;
}
