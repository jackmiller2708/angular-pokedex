import { CANVAS_ANIMATION } from '../constants';
import { Snowflake } from '../animations';
import { Provider } from '@angular/core';

export function provideAnimation(): Provider {
  return {
    provide: CANVAS_ANIMATION,
    useValue: Snowflake,
  };
}
