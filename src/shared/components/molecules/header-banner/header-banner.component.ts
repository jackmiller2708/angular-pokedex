import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MultislotAnimatorComponent } from '../';
import { CommonModule } from '@angular/common';
import { Animation } from '@directives/noop-animator/constants';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss',
  imports: [CommonModule, MultislotAnimatorComponent],
  host: {
    class: 'relative flex items-center justify-center w-full h-[40px] border-b',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderBannerComponent {
  private _content: string;
  private _animation: Animation;

  @Input()
  set content(value: string) {
    this._content = value;
  }

  get content(): string {
    return this._content;
  }

  @Input()
  set animation(value: Animation) {
    this._animation = value;
  }

  get animation(): Animation {
    return this._animation;
  }

  constructor() {
    this._content = '';
    this._animation = Animation.SNOWFLAKE;
  }
}
