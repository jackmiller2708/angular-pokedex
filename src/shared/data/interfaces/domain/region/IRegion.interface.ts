import { Name, NamedResource } from '../utilities';
import { List, RecordOf } from 'immutable';

export interface IRegion {
  id: number;
  name: string;
  names: List<Name>;
  locations: List<NamedResource>;
  mainGeneration: NamedResource;
  pokedexes: List<NamedResource>;
  versionGroups: List<NamedResource>;
}

export type Region = RecordOf<IRegion>;
