import { NamedResource } from '../utilities';
import { RecordOf } from 'immutable';

export interface IPokemonEntry {
  entryNumber: number;
  pokemonSpecies: NamedResource;
}

export type PokemonEntry = RecordOf<IPokemonEntry>;
