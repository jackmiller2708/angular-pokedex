import { Animation, CANVAS_ANIMATION } from '@directives/noop-animator/constants';
import { MultislotAnimatorComponent } from '../multislot-animator.component';
import { Injector, Provider, Type } from '@angular/core';
import { Snowflake, Star } from '@directives/noop-animator/animations';
import { HelperService } from '@services/application';
import { IAnimation } from '@directives/noop-animator/interfaces';

export function provideMultislotAnimation(): Provider {
  return {
    provide: CANVAS_ANIMATION,
    useFactory: async (injector: Injector): Promise<Type<IAnimation>> => {
      const animationType = await injector
        .get(HelperService)
        .waitForValue(
          injector.get(MultislotAnimatorComponent),
          'animationType'
        );

      const animations = {
        [Animation.SNOWFLAKE]: Snowflake,
        [Animation.STARRY_NIGHT]: Star,
      };
      
      return animations[animationType];
    },
    deps: [Injector, HelperService],
  };
}
