import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PortalService } from './service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portal',
  template: `
    <ng-template let-portalId="portalId" let-zIndex="zIndex">
      <div class="absolute top-0 left-0" id="portal-{{ portalId }}" [ngStyle]="{ zIndex }">
        <ng-content />
      </div>
    </ng-template>
  `,
  host: { class: 'hidden', ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  standalone: true,
})
export class PortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(TemplateRef)
  private readonly _template!: TemplateRef<any>;

  private _id: string | undefined;

  @Input()
  set isVisible(value: boolean) {
    if (!this._id) {
      return;
    }

    if (value) {
      this._portalService.attach(this._id);
    }

    if (!value) {
      this._portalService.detach(this._id);
    }
  }

  constructor(
    private readonly _viewContainerRef: ViewContainerRef,
    private readonly _portalService: PortalService
  ) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') {
      return;
    }

    this._id = this._portalService.register(
      this._template,
      this._viewContainerRef
    );
  }

  ngOnDestroy(): void {
    this._portalService.unregister(this._id!);
  }
}
