import { RecordOf } from 'immutable';

export interface IVirtualScrollOptions {
  itemHeight: number;
  itemWidth: number;
  listClass: string[];
  enabled: boolean;
}

export type VirtualScrollOption = RecordOf<IVirtualScrollOptions>;
