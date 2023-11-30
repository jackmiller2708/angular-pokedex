import { RecordAdaptor } from './IRecordAdaptor.interface';

export interface IAdaptableRecordOptions<R, T extends object> {
  defaultValues: T;
  adaptor: RecordAdaptor<R, T>;
  name: string;
}
