import { List, RecordOf } from 'immutable';
import { NamedResource } from '@interfaces/domain/utilities';
import { PokemonType } from './IPokemonType.interface';

export interface IPokemonTypePast {
  generation: NamedResource;
  types: List<PokemonType>;
}

export type PokemonTypePast = RecordOf<IPokemonTypePast>;
