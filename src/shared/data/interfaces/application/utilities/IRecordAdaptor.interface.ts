import { RecordOf } from 'immutable';

export type RecordAdaptor<R, T extends object> = (values?: R) => RecordOf<T>;
