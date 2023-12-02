import { IName, INamedAPIResource } from '../utilities';

export interface IRegion {
  id: number;
  name: string;
  names: IName[];
  locations: INamedAPIResource[];
  main_generation: INamedAPIResource;
  pokedexes: INamedAPIResource[];
  version_groups: INamedAPIResource[];
}
