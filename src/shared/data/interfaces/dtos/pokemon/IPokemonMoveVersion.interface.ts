import { INamedAPIResource } from '@interfaces/dtos/utilities';

export interface IPokemonMoveVersion {
  move_learn_method: INamedAPIResource;
  version_group: INamedAPIResource;
  level_learned_at: number;
}
