import { RecordOf } from 'immutable';

export interface IAssetInfo {
  name: string;
  location: string;
}

export type AssetInfo = RecordOf<IAssetInfo>;
