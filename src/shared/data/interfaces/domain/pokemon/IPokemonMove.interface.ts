import { PokemonMoveVersion } from './IPokemonMoveVersion.interface';
import { List, RecordOf } from 'immutable';
import { NamedResource } from '@interfaces/domain/utilities';

export interface IPokemonMove {
  move: NamedResource;
  versionGroupDetails: List<PokemonMoveVersion>;
}

export type PokemonMove = RecordOf<IPokemonMove>;
