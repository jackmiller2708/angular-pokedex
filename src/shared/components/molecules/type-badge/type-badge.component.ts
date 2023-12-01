import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@components/atoms';
import { CommonModule } from '@angular/common';
import { Type as TType } from '@interfaces/domain';
import { TYPES_COLORS } from '@constants';
import { Type } from '@models/domain';
import { HelperService } from '@services/application';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrl: './type-badge.component.scss',
  imports: [CommonModule, BadgeComponent],
  standalone: true,
})
export class TypeBadgeComponent {
  private _isIconVisible: boolean;
  private _type: TType;

  @Input()
  set isIconVisible(value: boolean) {
    this._isIconVisible = value;
  }

  get isIconVisible(): boolean {
    return this._isIconVisible;
  }

  @Input({ required: true })
  set type(value: string) {
    const upperCasedValue = value.toUpperCase();

    if (!this._helper.enum.has(TYPES_COLORS, upperCasedValue)) {
      return;
    }

    this._type = Type({
      name: value,
      color: this._helper.enum.get(TYPES_COLORS, upperCasedValue),
      iconFileName: `${value}.svg`,
    });
  }

  get type(): TType {
    return this._type;
  }

  constructor(private readonly _helper: HelperService) {
    this._type = Type();
    this._isIconVisible = false;
  }
}
