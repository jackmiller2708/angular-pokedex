import { IPokemonMoveVersion, PokemonMoveVersion as TPokemonMoveVersion } from '@interfaces/domain/pokemon';
import { IPokemonMoveVersion as IPokemonMoveVersionDto} from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonMoveVersion = {
  levelLearnedAt: 0,
  moveLearnMethod: NamedResource(),
  versionGroup: NamedResource(),
};

const adaptor = (values?: IPokemonMoveVersionDto): TPokemonMoveVersion => {
  const { level_learned_at, move_learn_method, version_group } = values ?? {};

  return PokemonMoveVersion({
    levelLearnedAt: level_learned_at,
    moveLearnMethod: NamedResource(move_learn_method),
    versionGroup: NamedResource(version_group),
  });
}

export const PokemonMoveVersion = AdaptableRecordFactory<IPokemonMoveVersionDto, IPokemonMoveVersion>({
  defaultValues,
  adaptor
})