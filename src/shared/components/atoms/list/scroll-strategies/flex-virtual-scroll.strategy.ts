import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { BehaviorSubject, Observable } from 'rxjs';
import { VirtualScrollOptions } from '../interfaces';
import { ListComponent } from '../list.component';
import { Injector } from '@angular/core';

export class FlexVirtualScrollStrategy implements VirtualScrollStrategy {
  private readonly _scrollIndexChange: BehaviorSubject<number>;

  readonly scrolledIndexChange: Observable<number>;

  constructor(private readonly _options: VirtualScrollOptions) {
    this._scrollIndexChange = new BehaviorSubject(0);
    this.scrolledIndexChange = this._scrollIndexChange.asObservable();
  }

  attach(viewport: CdkVirtualScrollViewport): void {
    throw new Error('Method not implemented.');
  }

  detach(): void {
    throw new Error('Method not implemented.');
  }

  onContentScrolled(): void {
    throw new Error('Method not implemented.');
  }

  onDataLengthChanged(): void {
    throw new Error('Method not implemented.');
  }

  onContentRendered(): void {
    throw new Error('Method not implemented.');
  }

  onRenderedOffsetChanged(): void {
    throw new Error('Method not implemented.');
  }

  scrollToIndex(index: number, behavior: ScrollBehavior): void {
    throw new Error('Method not implemented.');
  }
}

export function flexVirtualScrollStrategyFactory(injector: Injector): FlexVirtualScrollStrategy {
  const { virtualScrollOptions } = injector.get(ListComponent);

  return new FlexVirtualScrollStrategy(virtualScrollOptions);
}