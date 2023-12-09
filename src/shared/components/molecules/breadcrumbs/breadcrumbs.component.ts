import { LinkComponent, ListComponent } from '@components/atoms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '@interfaces/application';
import { List } from 'immutable';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  imports: [CommonModule, RouterModule, ListComponent, LinkComponent],
  standalone: true,
})
export class BreadcrumbsComponent {
  private _dataSource: List<Breadcrumb> | undefined;

  @Input({ required: true })
  set dataSource(value: List<Breadcrumb>) {
    this._dataSource = value;
  }

  get dataSource(): List<Breadcrumb> | undefined {
    return this._dataSource;
  }
}
