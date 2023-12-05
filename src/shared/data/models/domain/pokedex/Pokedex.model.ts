import { Description, Name, NamedResource } from '../utilities';
import { IPokedex, Pokedex as TPokedex } from '@interfaces/domain';
import { IPokedex as IPokedexDto } from '@interfaces/dtos';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { List } from 'immutable';
import { PokemonEntry } from './PokemonEntry.model';

const defaultValues: IPokedex = {
  id: 0,
  name: '',
  isMainSeries: false,
  descriptions: List(),
  names: List(),
  pokemonEntries: List(),
  region: NamedResource(),
  versionGroups: List(),
};

const adaptor = (values?: IPokedexDto): TPokedex => {
  const {
    is_main_series,
    descriptions,
    names,
    pokemon_entries,
    region,
    version_groups,
    ...others
  } = values ?? {};

  return Pokedex({
    ...others,
    isMainSeries: is_main_series,
    descriptions: List(descriptions?.map(Description.adaptor)),
    names: List(names?.map(Name.adaptor)),
    pokemonEntries: List(pokemon_entries?.map(PokemonEntry.adaptor)),
    region: NamedResource(region),
    versionGroups: List(version_groups?.map(NamedResource)),
  });
};

export const Pokedex = AdaptableRecordFactory<IPokedexDto, IPokedex>({
  defaultValues,
  adaptor,
});