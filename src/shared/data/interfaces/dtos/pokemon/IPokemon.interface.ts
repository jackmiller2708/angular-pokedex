import { IPokemonAbility, IPokemonHeldItem, IPokemonMove, IPokemonSprites, IPokemonStat, IPokemonType, IPokemonTypePast } from '.';
import { INamedAPIResource, IVersionGameIndex } from '@interfaces/dtos/utilities';

/**
 * Pokémon are the creatures that inhabit the world of the Pokémon games. 
 * They can be caught using Pokéballs and trained by battling with other 
 * Pokémon. Each Pokémon belongs to a specific species but may take on a 
 * variant which makes it differ from other Pokémon of the same species, 
 * such as base stats, available abilities and typings.
 */
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
