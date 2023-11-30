import { IPokemonFormType, PokemonFormType as TPokemonFormType } from '@interfaces/domain/pokemon';
import { IPokemonFormType as IPokemonFormTypeDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonFormType = {
  slot: 0,
  type: NamedResource(),
};

const adaptor = (values?: IPokemonFormTypeDto): TPokemonFormType => {
  const { slot, type } = values ?? {};

  return PokemonFormType({ slot, type: NamedResource(type) });
};

export const PokemonFormType = AdaptableRecordFactory<IPokemonFormTypeDto, IPokemonFormType>({
  name: 'PokemonFormType',
  defaultValues,
  adaptor
})