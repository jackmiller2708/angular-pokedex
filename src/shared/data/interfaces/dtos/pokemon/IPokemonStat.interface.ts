import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Stats determine certain aspects of battles. 
 * Each Pokémon has a value for each stat which 
 * grows as they gain levels and can be altered 
 * momentarily by effects in battles.
 */
export interface IPokemonStat {
  /**
   * The stat the Pokémon has.
   */
  stat: INamedAPIResource;

  /**
   * The effort points (EV) the Pokémon has in the stat.
   */
  effort: number;

  /**
   * The base value of the stat.
   */
  base_state: number;
}
