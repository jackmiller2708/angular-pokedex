import { Description, Name, NamedResource } from '../utilities';
import { List, RecordOf } from 'immutable';
import { PokemonEntry } from './IPokemonEntry.interface';

export interface IPokedex {
  id: number;
  name: string;
  isMainSeries: boolean;
  descriptions: List<Description>;
  names: List<Name>;
  pokemonEntries: List<PokemonEntry>;
  region: NamedResource;
  versionGroups: List<NamedResource>;
}

export type Pokedex = RecordOf<IPokedex>;
