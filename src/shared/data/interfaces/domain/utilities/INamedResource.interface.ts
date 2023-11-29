import { RecordOf } from 'immutable';

export interface INamedResource {
  name: string;
}

export type NamedResource = RecordOf<INamedResource>;
