import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonStat {
  stat: NamedResource;
  effort: number;
  baseState: number;
}

export type PokemonStat = RecordOf<IPokemonStat>;
