import { RecordAdaptor } from './IRecordAdaptor.interface';
import { Record } from 'immutable';

export interface IAdaptableRecordFactory<R, T extends object> extends Record.Factory<T> {
  adaptor: RecordAdaptor<R, T>;
}
