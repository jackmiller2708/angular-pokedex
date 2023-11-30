import { IPokemonStat, PokemonStat as TPokemonStat } from '@interfaces/domain/pokemon';
import { IPokemonStat as IPokemonStatDto } from '@interfaces/dtos/pokemon';
import { AdaptableRecordFactory } from '@models/application/utilities';
import { NamedResource } from '../utilities';

const defaultValues: IPokemonStat = {
  stat: NamedResource(),
  effort: 0,
  baseState: 0,
};

const adaptor = (values?: IPokemonStatDto): TPokemonStat => {
  const { base_state, effort, stat } = values ?? {};

  return PokemonStat({
    baseState: base_state,
    effort,
    stat: NamedResource(stat),
  });
}

export const PokemonStat = AdaptableRecordFactory<IPokemonStatDto, IPokemonStat>({
  defaultValues,
  adaptor,
});