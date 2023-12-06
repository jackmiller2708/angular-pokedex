import { PokemonAbility, PokemonHeldItem, PokemonMove, PokemonSprites, PokemonStat, PokemonType, PokemonTypePast } from '.';
import { NamedResource, VersionGameIndex } from '../utilities';
import { IPokemon, Pokemon as TPokemon } from '@interfaces/domain';
import { IPokemon as IPokemonDto } from '@interfaces/dtos';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { List } from 'immutable';

const defaultValues: IPokemon = {
  id: 0,
  name: '',
  height: 0,
  weight: 0,
  baseExperience: 0,
  order: 0,
  isDefault: false,
  locationAreaEncounters: '',
  pokedexEntry: undefined,
  sprites: PokemonSprites(),
  species: NamedResource(),
  types: List(),
  stats: List(),
  abilities: List(),
  moves: List(),
  forms: List(),
  gameIndices: List(),
  heldItems: List(),
  pastTypes: List(),
};

const adaptor = (value?: IPokemonDto): TPokemon => {
  const {
    id,
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    held_items,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight,
  } = value ?? {};

  return Pokemon({
    id,
    name,
    weight,
    height,
    baseExperience: base_experience,
    order,
    isDefault: is_default,
    locationAreaEncounters: location_area_encounters,
    sprites: PokemonSprites.adaptor(sprites),
    species: NamedResource(species),
    types: List(types?.map(PokemonType.adaptor)),
    stats: List(stats?.map(PokemonStat.adaptor)),
    abilities: List(abilities?.map(PokemonAbility.adaptor)),
    moves: List(moves?.map(PokemonMove.adaptor)),
    forms: List(forms?.map(NamedResource)),
    gameIndices: List(game_indices?.map(VersionGameIndex.adaptor)),
    heldItems: List(held_items?.map(PokemonHeldItem.adaptor)),
    pastTypes: List(past_types?.map(PokemonTypePast.adaptor)),
  });
};

export const Pokemon = AdaptableRecordFactory<IPokemonDto, IPokemon>({
  defaultValues,
  adaptor,
});
