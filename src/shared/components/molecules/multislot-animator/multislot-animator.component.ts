import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { provideMultislotAnimation } from './providers';
import { NoopAnimatorDirective } from '@directives';
import { Subject, debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Animation } from '@directives/noop-animator/constants';

@Component({
  selector: 'app-multislot-animator',
  templateUrl: './multislot-animator.component.html',
  styleUrl: './multislot-animator.component.scss',
  providers: [provideMultislotAnimation()],
  imports: [CommonModule, NoopAnimatorDirective],
  host: { class: 'block h-full w-full', ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MultislotAnimatorComponent implements OnInit {
  private readonly _hostResize: Subject<void>;
  private _animationType: Animation | undefined;

  @Input()
  set animationType(value: Animation) {
    this._animationType = value;
  } 

  get animationType(): Animation | undefined {
    return this._animationType;
  }

  get height(): number {
    return this._elRef.nativeElement.offsetHeight;
  }

  get width(): number {
    return this._elRef.nativeElement.offsetWidth;
  }

  constructor(
    private readonly _elRef: ElementRef<HTMLElement>,
    private readonly _CDR: ChangeDetectorRef
  ) {
    this._hostResize = new Subject();
  }

  ngOnInit(): void {
    this._hostResize
      .pipe(debounceTime(300))
      .subscribe(() => this._CDR.detectChanges());
  }

  @HostListener('window:resize')
  onHostResize() {
    this._hostResize.next();
  }
}
