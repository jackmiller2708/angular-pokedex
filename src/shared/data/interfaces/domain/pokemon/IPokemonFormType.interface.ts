import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonFormType {
  slot: number;
  type: NamedResource;
}

export type PokemonFormType = RecordOf<IPokemonFormType>;
