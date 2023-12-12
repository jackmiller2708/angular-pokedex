import { Component, Injector, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal',
  template: '',
  imports: [CommonModule],
  standalone: true,
})
export class PortalComponent {
  private _portal: TemplatePortal | undefined;
  private _outlet: DomPortalOutlet | undefined;

  private _attachTo: 'body' | HTMLElement;

  private get _isClient(): boolean {
    return typeof window !== 'undefined';
  }

  private get _attachEl(): HTMLElement {
    return this._attachTo === 'body' ? document?.body : this._attachTo;
  }

  private get _portalOutlet(): DomPortalOutlet {
    return (this._outlet = this._outlet ?? new DomPortalOutlet(this._attachEl));
  }

  @Input({ required: true })
  set template(value: TemplateRef<any>) {
    if (this._isClient) {
      this._portal = this._getPortal(value);
    }
  }

  @Input()
  set attachTo(value: 'body' | HTMLElement) {
    this._attachTo = value;
  }

  @Input()
  set isVisible(value: boolean) {
    if (!this._portal) {
      return;
    }

    if (this._portal.isAttached && !value) {
      this._portal.detach();
    }

    if (!this._portal.isAttached && value) {
      this._portal.attach(this._portalOutlet);
    }
  }

  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _injector: Injector
  ) {
    this._attachTo = 'body';
  }

  private _getPortal(template: TemplateRef<any>): TemplatePortal {
    return new TemplatePortal(
      template,
      this._viewContainerRef,
      {},
      this._injector
    );
  } 
}
