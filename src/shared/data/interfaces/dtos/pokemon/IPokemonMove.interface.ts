import { IPokemonMoveVersion } from './IPokemonMoveVersion.interface';
import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Moves are the skills of Pokémon in battle. In battle,
 * a Pokémon uses one move each turn. Some moves
 * (including those learned by Hidden Machine) can be
 * used outside of battle as well, usually for the purpose
 * of removing obstacles or exploring new areas.
 */
export interface IPokemonMove {
  /**
   * The move the Pokémon can learn.
   */
  move: INamedAPIResource;

  /**
   * The details of the version in which the Pokémon can
   * learn the move.
   */
  version_group_details: IPokemonMoveVersion[];
}
