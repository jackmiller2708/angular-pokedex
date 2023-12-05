import { IPokemonEntry, PokemonEntry as TPokemonEntry } from '@interfaces/domain/pokedex';
import { IPokemonEntry as IPokemonEntryDto } from '@interfaces/dtos/pokedex';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonEntry = {
  entryNumber: 0,
  pokemonSpecies: NamedResource(),
};

const adaptor = (values?: IPokemonEntryDto): TPokemonEntry => {
  const { entry_number, pokemon_species } = values ?? {};

  return PokemonEntry({
    entryNumber: entry_number,
    pokemonSpecies: NamedResource(pokemon_species),
  });
};

export const PokemonEntry = AdaptableRecordFactory<IPokemonEntryDto, IPokemonEntry>({
  defaultValues,
  adaptor,
});
