import { Animation, CANVAS_ANIMATION } from '@directives/noop-animator/constants';
import { MultislotAnimatorComponent } from '../multislot-animator.component';
import { Injector, Provider, Type } from '@angular/core';
import { Cloud, Snowflake, Star } from '@directives/noop-animator/animations';
import { HelperService } from '@services/application';
import { IAnimation } from '@directives/noop-animator/interfaces';

function getAnimation(animation: Animation): Type<IAnimation> | undefined {
  switch (animation) {
    case Animation.SNOWFLAKE:
      return Snowflake;
    case Animation.STARRY_NIGHT:
      return Star;
    case Animation.CLOUD:
      return Cloud;
    default:
      return;
  } 
}

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

      return getAnimation(animationType) ?? Snowflake;
    },
    deps: [Injector, HelperService],
  };
}
