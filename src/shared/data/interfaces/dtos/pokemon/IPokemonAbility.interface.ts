import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Abilities provide passive effects for Pokémon in battle or in the 
 * overworld. Pokémon have multiple possible abilities but can have 
 * only one ability at a time. 
 */
export interface IPokemonAbility {
  /**
   * Whether or not this is a hidden ability.
   */
  is_hidden: boolean;

  /**
   * The slot this ability occupies in this Pokémon species.
   */
  slot: number;

  /**
   * The ability the Pokémon may have.
   */
  ability: INamedAPIResource;
}
