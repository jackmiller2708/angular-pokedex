import { provideMultislotAnimation } from './providers';
import { CanvasAnimatorComponent } from '@components/atoms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animation } from '@components/atoms/canvas-animator/constants';

@Component({
  selector: 'app-multislot-animator',
  templateUrl: './multislot-animator.component.html',
  styleUrl: './multislot-animator.component.scss',
  providers: [provideMultislotAnimation()],
  imports: [CommonModule, CanvasAnimatorComponent],
  host: { class: 'block h-full w-full', ngSkipHydration: 'true' },
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

  constructor() {
    this._animationType = Animation.SNOWFLAKE;
  }
}
