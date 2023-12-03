import { IAssetInfo } from '@interfaces/application/assets';
import { Record } from 'immutable';

export const AssetInfo = Record<IAssetInfo>({
  name: '',
  location: '',
});
