import { IHeaderBannerConfig } from '../interfaces';
import { Animation } from '@components/atoms/canvas-animator/constants';
import { Record } from 'immutable';

export const HeaderBannerConfig = Record<IHeaderBannerConfig>({
  animation: Animation.SNOWFLAKE,
  content: '',
  visible: false,
});
