import { Animation, CANVAS_ANIMATION } from '@components/atoms/canvas-animator/constants';
import { MultislotAnimatorComponent } from '../multislot-animator.component';
import { Injector, Provider, Type } from '@angular/core';
import { IAnimation } from '@components/atoms/canvas-animator/interfaces';
import { Snowflake } from '@components/atoms/canvas-animator/animations';

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
