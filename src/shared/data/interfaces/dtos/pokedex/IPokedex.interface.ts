import { IDescription, IName, INamedAPIResource } from '../utilities';
import { IPokemonEntry } from './IPokemonEntry.interface';

export interface IPokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: IDescription[];
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: INamedAPIResource;
  version_groups: INamedAPIResource[];
}
