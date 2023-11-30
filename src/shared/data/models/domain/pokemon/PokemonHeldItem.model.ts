import { IPokemonHeldItem, PokemonHeldItem as TPokemonHeldItem } from '@interfaces/domain/pokemon';
import { IPokemonHeldItem as IPokemonHeldItemDto } from '@interfaces/dtos/pokemon';
import { PokemonHeldItemVersion } from './PokemonHeldItemVersion.model';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonHeldItem = {
  item: NamedResource(),
  versionDetails: PokemonHeldItemVersion(),
};

const adaptor = (values?: IPokemonHeldItemDto): TPokemonHeldItem => {
  const { item, version_details } = values ?? {};

  return PokemonHeldItem({
    item: NamedResource(item),
    versionDetails: PokemonHeldItemVersion.adaptor(version_details),
  });
}

export const PokemonHeldItem = AdaptableRecordFactory<IPokemonHeldItemDto, IPokemonHeldItem>({
  defaultValues,
  adaptor
})