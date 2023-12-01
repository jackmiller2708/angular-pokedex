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
  /**
   * The identifier for this Pokémon.
   */
  id: number;

  /**
   * The name for this Pokémon.
   */
  name: string;

  /**
   * The base experience gained for defeating this Pokémon.
   */
  base_experience: number;

  /**
   * The height of this Pokémon in decimeters.
   */
  height: number;

  /**
   * Set for exactly one Pokémon used as the default for each 
   * species.
   */
  is_default: boolean;

  /**
   * Order for sorting. Almost national order, except families are 
   * grouped together.
   */
  order: number;

  /**
   * The weight of this Pokémon in hectograms.
   */
  weight: number;

  /**
   * A link to a list of location areas, as well as encounter details 
   * pertaining to specific versions.
   */
  location_area_encounters: string;

  /**
   * A set of sprites used to depict this Pokémon in the game. A visual 
   * representation of the various sprites can be found at 
   * [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: IPokemonSprites;

  /**
   * The species this Pokémon belongs to.
   */
  species: INamedAPIResource;

  /**
   * A list of details showing types this Pokémon has.
   */
  types: IPokemonType[];

  /**
   * A list of base stat values for this Pokémon. 	
   */
  stats: IPokemonStat[];

  /**
   * A list of abilities this Pokémon could potentially have.
   */
  abilities: IPokemonAbility[];

  /**
   * A list of moves along with learn methods and level details 
   * pertaining to specific version groups.
   */
  moves: IPokemonMove[];

  /**
   * A list of forms this Pokémon can take on.
   */
  forms: INamedAPIResource[];

  /**
   * A list of game indices relevant to Pokémon item by generation.
   */
  game_indices: IVersionGameIndex[];

  /**
   * A list of items this Pokémon may be holding when encountered.
   */
  held_items: IPokemonHeldItem[];

  /**
   * A list of details showing types this pokémon had in previous 
   * generations.
   */
  past_types: IPokemonTypePast[];
}
