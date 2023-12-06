import { PokemonAbility, PokemonHeldItem, PokemonMove, PokemonSprites, PokemonStat, PokemonType, PokemonTypePast } from '.';
import { NamedResource, VersionGameIndex } from '@interfaces/domain/utilities';
import { RecordOf, List } from 'immutable';
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
  height: number;
  weight: number;
  baseExperience: number;
  order: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  pokedexEntry?: number,
  sprites: PokemonSprites;
  species: NamedResource;
  types: List<PokemonType>;
  stats: List<PokemonStat>;
  abilities: List<PokemonAbility>;
  moves: List<PokemonMove>;
  forms: List<NamedResource>;
  gameIndices: List<VersionGameIndex>;
  heldItems: List<PokemonHeldItem>;
  pastTypes: List<PokemonTypePast>;
}

/**
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other
 * Pokémon. Each Pokémon belongs to a specific species but may take on a
 * variant which makes it differ from other Pokémon of the same species,
 * such as base stats, available abilities and typings.
 */
export type Pokemon = RecordOf<IPokemon>;
