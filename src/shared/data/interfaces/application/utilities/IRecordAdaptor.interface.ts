import { RecordOf } from 'immutable';

export type RecordAdaptor<R, T extends object> = (value?: R) => RecordOf<T>;
