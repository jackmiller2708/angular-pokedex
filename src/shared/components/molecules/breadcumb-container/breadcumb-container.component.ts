import { Component, Input } from '@angular/core';
import { ListComponent } from '@components/atoms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '@interfaces/application';
import { List } from 'immutable';

@Component({
  selector: 'app-breadcumb-container',
  templateUrl: './breadcumb-container.component.html',
  styleUrl: './breadcumb-container.component.scss',
  imports: [CommonModule, RouterModule, ListComponent],
  standalone: true,
})
export class BreadcumbContainerComponent {
  private _dataSource: List<Breadcrumb> | undefined;

  @Input({ required: true })
  set dataSource(value: List<Breadcrumb>) {
    this._dataSource = value;
  }

  get dataSource(): List<Breadcrumb> | undefined {
    return this._dataSource;
  }
}
