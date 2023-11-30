import { IPokemonTypePast, PokemonTypePast as TPokemonTypePast } from '@interfaces/domain/pokemon';
import { IPokemonTypePast as IPokemonTypePastDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';
import { List } from 'immutable';
import { PokemonType } from './PokemonType.model';

const defaultValues: IPokemonTypePast = {
  generation: NamedResource(),
  types: List(),
};

const adaptor = (values?: IPokemonTypePastDto): TPokemonTypePast => {
  const { generation, types } = values ?? {};

  return PokemonTypePast({
    generation: NamedResource(generation),
    types: List(types?.map(PokemonType.adaptor)),
  });
};

export const PokemonTypePast = AdaptableRecordFactory<IPokemonTypePastDto, IPokemonTypePast>({
  name: 'PokemonTypePast',
  defaultValues,
  adaptor,
});
