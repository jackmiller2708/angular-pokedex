import { Type } from '@angular/core';
import { IAnimation } from '../interfaces';
import { Snowflake } from './snowflake.animation';

export * from './snowflake.animation';

export function multislotAnimationFactory(): Type<IAnimation> {
  return Snowflake;
}
