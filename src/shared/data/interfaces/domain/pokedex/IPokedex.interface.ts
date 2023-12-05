import { Description, Name, NamedResource } from '../utilities';
import { List, RecordOf } from 'immutable';
import { PokemonEntry } from './IPokemonEntry.interface';
import { Pokemon } from '../pokemon';

export interface IPokedex {
  id: number;
  name: string;
  isMainSeries: boolean;
  descriptions: List<Description>;
  names: List<Name>;
  pokemonEntries: List<PokemonEntry> | List<Pokemon>;
  region: NamedResource;
  versionGroups: List<NamedResource>;
}

export type Pokedex = RecordOf<IPokedex>;
