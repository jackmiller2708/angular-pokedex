import { RecordOf } from 'immutable';

export interface IVirtualGrid {
  maxCols: number;
  maxRows: number;
  visibleCols: number;
  visibleRows: number;
}

export type VirtualGrid = RecordOf<IVirtualGrid>;
