import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Types are properties for Pokémon and their moves. 
 * Each type has three properties: which types of Pokémon 
 * it is super effective against, which types of Pokémon 
 * it is not very effective against, and which types of 
 * Pokémon it is completely ineffective against.
 */
export interface IPokemonType {
  /**
   * The order the Pokémon's types are listed in.
   */
  slot: number;

  /**
   * The type the referenced Pokémon has.
   */
  type: INamedAPIResource;
}
