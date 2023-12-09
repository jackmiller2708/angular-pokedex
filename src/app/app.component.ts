import { HeaderComponent, LinkComponent, SearchInputComponent } from '@components/atoms';
import { AppStateService } from './services';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const imports = [
  CommonModule,
  RouterOutlet,
  HeaderComponent,
  SearchInputComponent,
  LinkComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports,
  providers: [AppStateService],
  host: {
    class: 'w-screen h-screen flex flex-col overflow-hidden',
  },
  standalone: true,
})
export class AppComponent {}
