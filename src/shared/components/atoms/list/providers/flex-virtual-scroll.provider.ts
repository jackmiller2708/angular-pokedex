import { flexVirtualScrollStrategyFactory } from '../scroll-strategies';
import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Injector, Provider } from '@angular/core';

export function provideFlexVirtualScrollStrategy(): Provider {
  return {
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: flexVirtualScrollStrategyFactory,
    deps: [Injector],
  };
}
