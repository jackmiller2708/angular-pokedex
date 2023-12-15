import { IVirtualScrollOptions } from '../interfaces';
import { Record } from 'immutable';

export const VirtualScrollOptions = Record<IVirtualScrollOptions>({
  itemHeight: 0,
  itemWidth: 0,
  listClass: [],
  enabled: true,
});
