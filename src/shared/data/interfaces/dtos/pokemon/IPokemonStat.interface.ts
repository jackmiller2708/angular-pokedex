import { INamedAPIResource } from '@interfaces/dtos/utilities';

export interface IPokemonStat {
  stat: INamedAPIResource;
  effort: number;
  base_state: number;
}
