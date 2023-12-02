import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class CardComponent {
  @HostBinding('class')
  private get _classes(): string[] {
    return ['flex', 'flex-col', 'items-center', 'w-fit', 'border', 'rounded-sm'];
  }
}
