import { NamedResource } from '@interfaces/domain/utilities';
import { RecordOf } from 'immutable';

export interface IVersionGameIndex {
  game_index: number;
  version: NamedResource;
}

export type VersionGameIndex = RecordOf<IVersionGameIndex>;
