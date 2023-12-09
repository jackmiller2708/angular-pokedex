import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class HeaderComponent {
  @HostBinding('class')
  private get _classes(): string[] {
    return ['w-full', 'h-16', 'bg-red-500'];
  }
}
