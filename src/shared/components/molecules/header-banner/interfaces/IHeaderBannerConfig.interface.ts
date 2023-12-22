import { Animation } from '@components/atoms/canvas-animator/constants';
import { RecordOf } from 'immutable';

export interface IHeaderBannerConfig {
  content: string;
  animation: Animation;
  visible: boolean;
}

export type HeaderBannerConfig = RecordOf<IHeaderBannerConfig>;
