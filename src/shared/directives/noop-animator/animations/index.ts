import { IAnimation } from '../interfaces';
import { Snowflake } from './snowflake.animation';
import { Type } from '@angular/core';

export * from './snowflake.animation';
export * from './starry-night.animation';
export * from './cloud.animation';

export function multislotAnimationFactory(): Type<IAnimation> {
  return Snowflake;
}
