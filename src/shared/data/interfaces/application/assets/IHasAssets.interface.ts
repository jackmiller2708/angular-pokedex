import { AssetInfo } from './IAssetInfo.interface';
import { List } from 'immutable';

export interface IHasAssets {
  assetsInfo: List<AssetInfo>;
}
