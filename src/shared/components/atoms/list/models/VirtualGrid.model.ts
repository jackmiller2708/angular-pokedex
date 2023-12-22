import { IVirtualGrid } from '../interfaces';
import { Record } from 'immutable';

export const VirtualGrid = Record<IVirtualGrid>({
  maxCols: 0,
  maxRows: 0,
  visibleCols: 0,
  visibleRows: 0,
});
