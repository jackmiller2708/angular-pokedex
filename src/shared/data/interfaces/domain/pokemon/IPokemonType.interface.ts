import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonType {
  slot: number;
  type: NamedResource;
}

export type PokemonType = RecordOf<IPokemonType>;
