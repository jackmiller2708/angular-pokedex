import { IPokemonType, PokemonType as TPokemonType } from '@interfaces/domain/pokemon';
import { IPokemonType as IPokemonTypeDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonType = {
  slot: 0,
  type: NamedResource(),
};

const adaptor = (values?: IPokemonTypeDto): TPokemonType => {
  const { slot, type } = values ?? {};

  return PokemonType({ slot, type: NamedResource(type) });
}

export const PokemonType = AdaptableRecordFactory<IPokemonTypeDto, IPokemonType>({
  name: 'PokemonType',
  defaultValues,
  adaptor
});
