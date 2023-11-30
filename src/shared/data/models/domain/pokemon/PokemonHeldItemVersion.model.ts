import { IPokemonHeldItemVersion, PokemonHeldItemVersion as TPokemonHeldItemVersion } from '@interfaces/domain/pokemon';
import { IPokemonHeldItemVersion as IPokemonHeldItemVersionDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonHeldItemVersion = {
  rarity: 0,
  version: NamedResource(),
};

const adaptor = (values?: IPokemonHeldItemVersionDto): TPokemonHeldItemVersion => {
  const { rarity, version } = values ?? {};

  return PokemonHeldItemVersion({ rarity, version: NamedResource(version) });
}

export const PokemonHeldItemVersion = AdaptableRecordFactory<IPokemonHeldItemVersionDto, IPokemonHeldItemVersion>({
  name: 'PokemonHeldItemVersion',
  defaultValues,
  adaptor
})