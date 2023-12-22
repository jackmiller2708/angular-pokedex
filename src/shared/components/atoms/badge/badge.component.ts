import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [CommonModule],
  host: { class: 'rounded-md py-2 px-3' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BadgeComponent {}
