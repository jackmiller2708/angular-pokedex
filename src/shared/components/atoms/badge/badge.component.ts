import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class BadgeComponent {
  @HostBinding('class')
  private get _classes(): string[] {
    return ['rounded-md', 'py-2', 'px-3'];
  }
}
