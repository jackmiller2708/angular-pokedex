import { HeaderComponent, SearchInputComponent } from '@components/atoms';
import { Component, HostBinding } from '@angular/core';
import { AppStateService } from './services';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const imports = [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  SearchInputComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
  providers: [AppStateService],
  standalone: true,
})
export class AppComponent {
  @HostBinding('class')
  private get _classes(): string[] {
    return ['w-screen', 'h-screen', 'flex', 'flex-col', 'overflow-hidden'];
  }
}
