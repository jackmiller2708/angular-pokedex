import { AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, OnChanges, OnInit, SimpleChanges, SkipSelf, Type } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { CANVAS_ANIMATION } from './constants';
import { IAnimation } from './interfaces';

@Directive({
  selector: '[appNoopAnimator]',
  standalone: true,
})
export class NoopAnimatorDirective implements AfterViewInit, OnChanges, OnInit {
  private readonly _sizeChange: Subject<void>;

  private _height: number;
  private _width: number;

  @Input({ required: true })
  set height(value: number) {
    this._height = value;
  }

  @Input({ required: true })
  set width(value: number) {
    this._width = value;
  }

  constructor(
    @SkipSelf()
    @Inject(CANVAS_ANIMATION)
    private readonly _tAnimation: Type<IAnimation> | Promise<Type<IAnimation>>,
    private readonly _elementRef: ElementRef<HTMLCanvasElement>,
    private readonly _ngZone: NgZone
  ) {
    this._height = this._width = 0;
    this._sizeChange = new Subject();
  }

  ngOnInit(): void {
    this._sizeChange
      .pipe(debounceTime(50))
      .subscribe(this._animate.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { width, height } = changes;

    if (width && !width.isFirstChange()) {
      this._sizeChange.next();
    }

    if (height && !height.isFirstChange()) {
      this._sizeChange.next();
    }
  }

  ngAfterViewInit(): void {
    if (!this._tAnimation || typeof window === 'undefined') {
      return;
    }

    this._animate();
  }

  private async _animate() {
    const { nativeElement: canvasEl } = this._elementRef;

    canvasEl.getContext('2d')!.clearRect(0, 0, canvasEl.height, canvasEl.width);

    canvasEl.height = this._height;
    canvasEl.width = this._width;

    const animation = new (await Promise.resolve(this._tAnimation))({
      width: this._width,
      height: this._height,
    });

    this._ngZone.runOutsideAngular(() => {
      canvasEl.style.background = animation.backgroundColor;
      animation.animate(canvasEl.getContext('2d')!);
    });
  }
}
