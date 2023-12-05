import { INamedAPIResource } from '../utilities';

export interface IPokemonEntry {
  entry_number: number;
  pokemon_species: INamedAPIResource;
}
