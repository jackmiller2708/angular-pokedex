import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MultislotAnimatorComponent } from '../';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss',
  imports: [CommonModule, MultislotAnimatorComponent],
  host: { class: 'relative flex items-center justify-center w-full h-[40px]' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderBannerComponent {
  private _content: string;

  @Input()
  set content(value: string) {
    this._content = value;
  }

  get content(): string {
    return this._content;
  }

  constructor() {
    this._content = '';
  }
}
