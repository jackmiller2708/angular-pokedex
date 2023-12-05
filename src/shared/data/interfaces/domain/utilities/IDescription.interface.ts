import { NamedResource } from './INamedResource.interface';
import { RecordOf } from 'immutable';

export interface IDescription {
  description: string;
  language: NamedResource;
}

export type Description = RecordOf<IDescription>;
