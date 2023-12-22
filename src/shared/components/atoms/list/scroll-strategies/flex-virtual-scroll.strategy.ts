import { RenderRange, VirtualGrid as TVirtualGrid, VirtualScrollOptions } from '../interfaces';
import { BehaviorSubject, Observable, Subject, debounce, distinctUntilKeyChanged, pipe } from 'rxjs';
import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { ListComponent } from '../list.component';
import { VirtualGrid } from '../models';
import { Injector } from '@angular/core';

export function flexVirtualScrollStrategyFactory(injector: Injector): FlexVirtualScrollStrategy {
  const { virtualScrollOptions } = injector.get(ListComponent);

  return new FlexVirtualScrollStrategy(virtualScrollOptions);
}

export class FlexVirtualScrollStrategy implements VirtualScrollStrategy {
  private readonly _scrollIndexChange: BehaviorSubject<number>;
  private readonly _renderRangeChange: Subject<RenderRange>;

  private _viewport: CdkVirtualScrollViewport | undefined;

  private _totalItems: number;
  private _visibleItems: number;
  private _prevOffset: number;

  private _maxCols: number;
  private _maxRows: number;

  readonly scrolledIndexChange: Observable<number>;

  private get _item() {
    return this._options.item;
  }

  private get _displayOptions() {
    return this._options.display;
  }

  private get _viewportEl(): HTMLElement {
    return this._viewport!.elementRef.nativeElement;
  }

  constructor(private readonly _options: VirtualScrollOptions) {
    this._totalItems = this._maxCols = this._maxRows = this._visibleItems = this._prevOffset = 0;
    this._scrollIndexChange = new BehaviorSubject(0);
    this._renderRangeChange = new Subject();

    this.scrolledIndexChange = this._scrollIndexChange.asObservable();
  }

  attach(viewport: CdkVirtualScrollViewport): void {
    this._viewport = viewport;
    this._onViewportAttached();
  }

  detach(): void {
    this._scrollIndexChange.complete();
    this._renderRangeChange.complete();
  }

  onContentScrolled(): void {
    if (!this._viewport) {
      return;
    }
    
    this._updateRenderContent();
  }

  onDataLengthChanged(): void {
    // throw new Error('Method not implemented.');
  }

  onContentRendered(): void {
  }

  onRenderedOffsetChanged(): void {
    // throw new Error('Method not implemented.');
  }

  scrollToIndex(index: number, behavior: ScrollBehavior): void {
    // throw new Error('Method not implemented.');
  }

  private _updateRenderContent(): void {
    this._renderRangeChange.next(this._getRenderRange(this._visibleItems));
  }

  private _onRenderRangeChange(range: RenderRange): void {
    if (!this._viewport) {
      return;
    }

    const itemHeight = this._item.height + this._displayOptions.gap;
    const currOffset = this._viewport.measureScrollOffset();
    const direction = Math.min(Math.max(currOffset - this._prevOffset, -1), 1);
    const scrollOffset = Math.max(currOffset - (itemHeight * direction), 0);

    this._viewport.setRenderedContentOffset(scrollOffset);
    this._viewport.setRenderedRange(range);

    this._prevOffset = currOffset;
  }

  private _onViewportAttached(): void {
    if (!this._viewport) {
      return;
    }

    this._renderRangeChange
      .pipe(distinctUntilKeyChanged('start'))
      .subscribe(this._onRenderRangeChange.bind(this));

    this._totalItems = this._viewport.getDataLength();

    const { maxCols, maxRows, visibleRows } = this._getTotalContentGrid();
    const { height } = this._item; 
    const { gap } = this._displayOptions;

    const totalItemHeight = height + gap;

    this._maxCols = maxCols;
    this._maxRows = maxRows;
    this._visibleItems = (maxCols * visibleRows);

    this._viewport.setTotalContentSize(totalItemHeight * maxRows);
    this._updateRenderContent();
  }

  private _getRenderRange(totalRenderItem: number): RenderRange {
    if (!this._viewport) {
      return { start: 0, end: 0 };
    }

    const { height: rowHeight } = this._item;
    const { gap } = this._displayOptions;

    const scrollOffset = this._viewport.measureScrollOffset();
    const rowOffset = Math.floor(scrollOffset / (rowHeight + gap));

    const start = rowOffset * this._maxCols;
    const end = start + totalRenderItem;

    return { start, end };
  }

  private _getTotalContentGrid(): TVirtualGrid {
    const { offsetHeight, offsetWidth } = this._viewportEl;
    const { height, width } = this._item;
    const { gap } = this._displayOptions;

    const visibleRows = Math.ceil(offsetHeight / (height + gap));
    const maxCols = Math.floor(offsetWidth / (width + gap));
    const maxRows = Math.ceil(this._totalItems / maxCols);

    return VirtualGrid({ maxCols, maxRows, visibleCols: maxCols, visibleRows });
  }
}