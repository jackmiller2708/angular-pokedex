import { AfterViewInit, Directive, ElementRef, Inject, Input, NgZone, Type } from '@angular/core';
import { provideAnimation } from './providers';
import { CANVAS_ANIMATION } from './constants';
import { IAnimation } from './interfaces';

@Directive({
  selector: '[appNoopAnimator]',
  providers: [provideAnimation()],
  standalone: true,
})
export class NoopAnimatorDirective implements AfterViewInit {
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
    @Inject(CANVAS_ANIMATION)
    private readonly _tAnimation: Type<IAnimation>,
    private readonly _elementRef: ElementRef<HTMLCanvasElement>,
    private readonly _ngZone: NgZone
  ) {
    this._height = this._width = 0;
  }

  ngAfterViewInit(): void {
    if (!this._tAnimation || typeof window === 'undefined') {
      return;
    }

    this._animate();
  }

  private _animate() {
    const { nativeElement: canvasEl } = this._elementRef;

    canvasEl.getContext('2d')!.clearRect(0, 0, canvasEl.height, canvasEl.width);

    canvasEl.height = this._height;
    canvasEl.width = this._width;

    const animation = new this._tAnimation({
      width: this._width,
      height: this._height,
    });

    this._ngZone.runOutsideAngular(() => {
      canvasEl.style.backgroundColor = animation.backgroundColor;
      animation.animate(canvasEl.getContext('2d')!);
    });
  }
}
