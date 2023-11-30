import { IPokemonSprites, PokemonSprites as TPokemonSprites } from '@interfaces/domain/pokemon';
import { IPokemonSprites as IPokemonSpritesDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';

const defaultValues: IPokemonSprites = {
  officialArtwork: '',
  backDefault: undefined,
  frontDefault: undefined,
  frontShiny: undefined,
  frontFemale: undefined,
  frontShinyFemale: undefined,
  backShiny: undefined,
  backFemale: undefined,
  backShinyFemale: undefined,
};

const adaptor = (values?: IPokemonSpritesDto): TPokemonSprites => {
  const {
    back_default,
    back_female,
    back_shiny,
    back_shiny_female,
    front_default,
    front_female,
    front_shiny,
    front_shiny_female,
    other,
  } = values ?? {};

  return PokemonSprites({
    backDefault: back_default,
    backFemale: back_female,
    backShiny: back_shiny,
    backShinyFemale: back_shiny_female,
    frontDefault: front_default,
    frontFemale: front_female,
    frontShiny: front_shiny,
    frontShinyFemale: front_shiny_female,
    officialArtwork: other?.["official-artwork"].front_default,
  });
}

export const PokemonSprites = AdaptableRecordFactory<IPokemonSpritesDto, IPokemonSprites>({
  defaultValues,
  adaptor
})