import { RecordOf } from 'immutable';

interface IVirtualScrollItem {
  height: number;
  width: number;
}

interface IVirtualScrollDisplay {
  flex: boolean;
  gap: number;
}

export interface IVirtualScrollOptions {
  item: IVirtualScrollItem;
  display: IVirtualScrollDisplay;
  enabled: boolean;
}

export type VirtualScrollOptions = RecordOf<IVirtualScrollOptions>;
