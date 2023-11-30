import { PokemonHeldItemVersion } from './IPokemonHeldItemVersion.interface';
import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonHeldItem {
  item: NamedResource;
  versionDetails: PokemonHeldItemVersion;
}

export type PokemonHeldItem = RecordOf<IPokemonHeldItem>;
