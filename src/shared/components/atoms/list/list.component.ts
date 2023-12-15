import { VirtualScrollOption as TVirtualScrollOption } from './interfaces';
import { Component, Input, TemplateRef } from '@angular/core';
import { VirtualScrollOptions } from './models';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { List } from 'immutable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [CommonModule, ScrollingModule],
  standalone: true,
})
export class ListComponent<T> {
  private _template: TemplateRef<unknown> | undefined;
  private _dataSource: List<T>;
  private _itemClass: string | undefined;
  private _styleClass: string | undefined;
  private _virtualScrollOptions: TVirtualScrollOption;

  @Input({ required: true })
  set dataSource(value: List<T>) {
    this._dataSource = value;
  }

  get dataSource(): List<T> {
    return this._dataSource;
  }

  @Input()
  set template(value: TemplateRef<unknown>) {
    this._template = value;
  }

  get template(): TemplateRef<unknown> | undefined {
    return this._template;
  }

  @Input()
  set itemClass(value: string) {
    this._itemClass = value;
  }

  get itemClass(): string {
    return this._itemClass ?? '';
  }

  @Input()
  set styleClass(value: string) {
    this._styleClass = value;
  }

  get styleClass(): string {
    return this._styleClass ?? '';
  }

  @Input()
  set virtualScrollOptions(value: TVirtualScrollOption) {
    this._virtualScrollOptions = value;
  }

  get virtualScrollOptions(): TVirtualScrollOption {
    return this._virtualScrollOptions
  }

  constructor() {
    this._dataSource = List();
    this._virtualScrollOptions = VirtualScrollOptions({ enabled: false });
  }
}
