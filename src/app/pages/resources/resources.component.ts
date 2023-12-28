import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
  imports: [CommonModule, NgOptimizedImage],
  host: { class: 'flex h-full w-full items-center justify-center' },
  standalone: true,
})
export class ResourcesComponent {}
