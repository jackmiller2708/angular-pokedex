import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { ValueChangeEvent } from './interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchInputComponent,
      multi: true,
    },
  ],
  standalone: true,
})
export class SearchInputComponent implements ControlValueAccessor {
  private _disabled: boolean;
  private _value: string | undefined;
  private _valueChangeEvent: ValueChangeEvent;
  
  private _onValueChange: ((value: string) => void) | undefined;
  private _onControlTouched: (() => void) | undefined;

  @Input()
  set disabled(value: boolean) {
    this._disabled =
      this._onControlTouched && this._onValueChange ? this._disabled : value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set value(value: string) {
    this._value = value;
  }

  get value(): string | undefined {
    return this._value;
  }

  @Input()
  set valueChangeEvent(value: ValueChangeEvent) {
    this._valueChangeEvent = value;
  }

  constructor() {
    this._disabled = false;
    this._valueChangeEvent = 'change';
  }

  onFocus(): void {
    this._onControlTouched?.();
  }

  onInput(event: Event): void {
    if (this._valueChangeEvent === 'input') {
      this._onValueChange?.((event.target as HTMLInputElement).value);
    }
  }

  onChange(event: Event): void {
    if (this._valueChangeEvent === 'change') {
      this._onValueChange?.((event.target as HTMLInputElement).value);
    }
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onValueChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onControlTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
