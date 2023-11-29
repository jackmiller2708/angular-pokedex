import { RecordOf } from 'immutable';

export interface INamedResource {
  name: string;
  apiReference: string;
}

export type NamedResource = RecordOf<INamedResource>;
