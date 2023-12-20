import { IVirtualScrollOptions } from '../interfaces';
import { Record } from 'immutable';

export const VirtualScrollOptions = Record<IVirtualScrollOptions>({
  item: { height: 0, width: 0 },
  display: { flex: false, gap: 0 },
  enabled: false,
});
