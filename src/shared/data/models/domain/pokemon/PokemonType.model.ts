import { IPokemonType, PokemonType as TPokemonType } from '@interfaces/domain/pokemon';
import { IPokemonType as IPokemonTypeDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';
import { AssetInfo } from '@models/application/assets';
import { List } from 'immutable';

const defaultValues: IPokemonType = {
  slot: 0,
  type: NamedResource(),
  assetsInfo: List(),
};

const adaptor = (values?: IPokemonTypeDto): TPokemonType => {
  const { slot, type } = values ?? {};

  return PokemonType({
    slot,
    type: NamedResource(type),
    assetsInfo: List([
      AssetInfo({
        name: `${type?.name}-type-icon`,
        location: `type-icons/${type?.name}.svg`,
      }),
    ]),
  });
}

export const PokemonType = AdaptableRecordFactory<IPokemonTypeDto, IPokemonType>({
  defaultValues,
  adaptor
});
