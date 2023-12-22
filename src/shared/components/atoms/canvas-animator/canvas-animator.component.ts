import { AfterViewInit, Component, ElementRef, Inject, NgZone, Type, ViewChild } from '@angular/core';
import { CANVAS_ANIMATION } from './constants';
import { provideAnimation } from './providers';
import { CommonModule } from '@angular/common';
import { IAnimation } from './interfaces';

@Component({
  selector: 'app-canvas-animator',
  templateUrl: './canvas-animator.component.html',
  styleUrl: './canvas-animator.component.scss',
  providers: [provideAnimation()],
  imports: [CommonModule],
  host: { class: 'block h-full w-full', ngSkipHydration: 'true' },
  standalone: true,
})
export class CanvasAnimatorComponent implements AfterViewInit {
  @ViewChild('animator')
  private readonly _animator!: ElementRef<HTMLCanvasElement>;

  constructor(
    @Inject(CANVAS_ANIMATION)
    private readonly _tAnimation: Type<IAnimation>,
    private readonly _elementRef: ElementRef<HTMLElement>,
    private readonly _ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    if (!this._tAnimation || typeof window === 'undefined') {
      return;
    }

    const { nativeElement: canvasEl } = this._animator;
    const { nativeElement: hostEl } = this._elementRef;
    const { offsetWidth: width, offsetHeight: height } = hostEl;

    canvasEl.height = height;
    canvasEl.width = width;

    const animation = new this._tAnimation({ width, height });

    this._ngZone.runOutsideAngular(() =>
      animation.animate(canvasEl.getContext('2d')!)
    );
  }
}
