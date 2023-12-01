import { INamedAPIResource } from '@interfaces/dtos/utilities';
import { IPokemonType } from './IPokemonType.interface';

export interface IPokemonTypePast {
  /**
   * The last generation in which the referenced pokémon had the listed types.
   */
  generation: INamedAPIResource;

  /**
   * The types the referenced pokémon had up to and including the listed generation.
   */
  types: IPokemonType[];
}
