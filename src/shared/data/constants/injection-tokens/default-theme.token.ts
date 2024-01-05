import { InjectionToken } from "@angular/core";
import { AppTheme } from "@interfaces/application";

export const DEFAULT_THEME = new InjectionToken(
  'The default theme for the application',
  { providedIn: 'root', factory: (): AppTheme => 'light' }
);