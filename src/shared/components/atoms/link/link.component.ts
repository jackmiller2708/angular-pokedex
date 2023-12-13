import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  imports: [CommonModule, RouterModule],
  standalone: true,
})
export class LinkComponent {
  private _to: string | string[];

  @Input({ required: true })
  set to(value: string | string[]) {
    this._to = value;
  }

  get to(): string | string[] {
    return this._to;
  }

  constructor() {
    this._to = '/';
  }
}
