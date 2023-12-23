import { Animation, CANVAS_ANIMATION } from '@directives/noop-animator/constants';
import { MultislotAnimatorComponent } from '../multislot-animator.component';
import { Injector, Provider, Type } from '@angular/core';
import { IAnimation } from '@directives/noop-animator/interfaces';
import { Snowflake } from '@directives/noop-animator/animations';

export function provideMultislotAnimation(): Provider {
  return {
    provide: CANVAS_ANIMATION,
    useFactory: (injector: Injector): Type<IAnimation> => {
      const component = injector.get(MultislotAnimatorComponent);
      const animations = { [Animation.SNOWFLAKE]: Snowflake };

      return animations[component.animationType];
    },
    deps: [Injector],
  };
}
