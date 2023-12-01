import { INamedAPIResource } from '@interfaces/dtos/utilities';

/**
 * Version groups categorize highly similar versions of the games.
 */
export interface IPokemonMoveVersion {
  /**
   * The method by which the move is learned.
   */
  move_learn_method: INamedAPIResource;

  /**
   * The version group in which the move is learned.
   */
  version_group: INamedAPIResource;

  /**
   * The minimum level to learn the move.
   */
  level_learned_at: number;
}
