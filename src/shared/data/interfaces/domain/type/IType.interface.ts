import { RecordOf } from 'immutable';

export interface IType {
  name: string;
  color: string;
  iconFileName: string;
}

export type Type = RecordOf<IType>;
