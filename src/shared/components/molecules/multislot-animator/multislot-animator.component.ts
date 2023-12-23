import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { provideMultislotAnimation } from './providers';
import { NoopAnimatorDirective } from '@directives';
import { CommonModule } from '@angular/common';
import { Animation } from '@directives/noop-animator/constants';

@Component({
  selector: 'app-multislot-animator',
  templateUrl: './multislot-animator.component.html',
  styleUrl: './multislot-animator.component.scss',
  providers: [provideMultislotAnimation()],
  imports: [CommonModule, NoopAnimatorDirective],
  host: { class: 'block h-full w-full', ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MultislotAnimatorComponent {
  private _animationType: Animation;

  @Input()
  set animationType(value: Animation) {
    this._animationType = value;
  }

  get animationType(): Animation {
    return this._animationType;
  }

  get height(): number {
    return this._elRef.nativeElement.offsetHeight;
  }

  get width(): number {
    return this._elRef.nativeElement.offsetWidth;
  }

  constructor(private readonly _elRef: ElementRef<HTMLElement>) {
    this._animationType = Animation.SNOWFLAKE;
  }
}
