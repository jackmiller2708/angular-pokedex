import { InjectionToken } from '@angular/core';
import { Snowflake } from '@directives/noop-animator/animations';

export const CANVAS_ANIMATION = new InjectionToken(
  'Injects multislot animation',
  { providedIn: 'root', factory: () => Snowflake }
);
