import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonHeldItemVersion {
  version: NamedResource;
  rarity: number;
}

export type PokemonHeldItemVersion = RecordOf<IPokemonHeldItemVersion>;
