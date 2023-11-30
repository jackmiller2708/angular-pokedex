import { IPokemonMove, PokemonMove as TPokemonMove } from '@interfaces/domain/pokemon';
import { IPokemonMove as IPokemonMoveDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { PokemonMoveVersion } from './PokemonMoveVersion.model';
import { NamedResource } from '../utilities';
import { List } from 'immutable';

const defaultValues: IPokemonMove = {
  move: NamedResource(),
  versionGroupDetails: List(),
};

const adaptor = (values?: IPokemonMoveDto): TPokemonMove => {
  const { move, version_group_details } = values ?? {};

  return PokemonMove({
    move: NamedResource(move),
    versionGroupDetails: List(version_group_details?.map(PokemonMoveVersion.adaptor)),
  });
};

export const PokemonMove = AdaptableRecordFactory<IPokemonMoveDto, IPokemonMove>({
  defaultValues,
  adaptor
})