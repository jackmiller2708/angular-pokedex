import { Injectable, Renderer2, RendererFactory2, TemplateRef, ViewContainerRef } from '@angular/core';
import { DomPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { HelperService } from '@services/application';
import { Map } from 'immutable';

const BASE_Z_INDEX = 99;

@Injectable({ providedIn: 'root' })
export class PortalService {
  private readonly _renderer: Renderer2;
  private _rootElAppended: boolean;

  private _portals: Map<string, TemplatePortal>;
  private _outlet: DomPortalOutlet | undefined;
  private _rootEl: HTMLElement | undefined;

  constructor(
    private readonly _rendererFactory: RendererFactory2,
    private readonly _helper: HelperService
  ) {
    this._renderer = this._rendererFactory.createRenderer(null, null);
    this._portals = Map();
    this._rootElAppended = false;

    if (typeof window !== undefined) {
      this._rootEl = this._renderer.createElement('div');
      this._outlet = new DomPortalOutlet(this._rootEl!);

      this._renderer.addClass(this._rootEl, 'portal-container'); 
    }
  }

  register(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    if (!this._rootElAppended) {
      this._renderer.appendChild(document.body, this._rootEl);
      this._rootElAppended = true;
    }

    const portalId = this._helper.generateGUID();

    this._portals = this._portals.set(
      portalId,
      new TemplatePortal(templateRef, viewContainerRef, { portalId })
    );

    return portalId;
  }

  unregister(id: string): void {
    if (!this._portals.has(id)) {
      return;
    }

    this._portals = this._portals.remove(id);
  }

  attach(id: string): void {
    const isNotAttachable = !(
      this._outlet &&
      this._portals.has(id) &&
      !this._portals.get(id)!.isAttached
    );

    if (isNotAttachable) {
      return;
    }

    const portal = this._portals.get(id)!;
    const zIndex = this._portals.size <= 1 ? BASE_Z_INDEX : this._calculateZIndex();

    portal.context = { portalId: id, zIndex };
    portal.attach(this._outlet!);
    
    this._portals = this._portals.sortBy((portal) => portal.context['zIndex']);
  }

  detach(id: string): void {
    const isNotDetachable = !(
      this._outlet &&
      this._portals.has(id) &&
      this._portals.get(id)!.isAttached
    );

    if (isNotDetachable) {
      return;
    }

    this._portals.get(id)!.detach();
  }

  private _calculateZIndex(): number {
    const lastPortal = this._portals.last()!;
    const zIndex = lastPortal.context['zIndex'] + 1;

    let baseZIndex = BASE_Z_INDEX;

    this._portals.forEach(
      (portal) => (portal.context['zIndex'] = baseZIndex += 1)
    );

    return zIndex;
  }
}
