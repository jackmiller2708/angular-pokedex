import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IPokemonMoveVersion {
  moveLearnMethod: NamedResource;
  versionGroup: NamedResource;
  levelLearnedAt: number;
}

export type PokemonMoveVersion = RecordOf<IPokemonMoveVersion>;
