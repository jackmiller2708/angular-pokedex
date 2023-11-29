import { IPokemonAbility, IPokemonHeldItem, IPokemonMove, IPokemonSprites, IPokemonStat, IPokemonType, IPokemonTypePast } from '.';
import { INamedAPIResource, IVersionGameIndex } from '@interfaces/dtos/utilities';

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  location_area_encounters: string;
  sprites: IPokemonSprites;
  species: INamedAPIResource;
  types: IPokemonType[];
  stats: IPokemonStat[];
  abilities: IPokemonAbility[];
  moves: IPokemonMove[];
  forms: INamedAPIResource[];
  game_indices: IVersionGameIndex[];
  held_items: IPokemonHeldItem[];
  past_types: IPokemonTypePast[];
}
