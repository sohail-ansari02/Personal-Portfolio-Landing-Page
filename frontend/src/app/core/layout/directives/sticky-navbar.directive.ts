import {
  DestroyRef,
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface IPosition {
  x: number;
  y: number;
}
type MouseDirection = "UP" | "DOWN";

@Directive({
    selector: '[appStickyNavbar]',
    host: {
        '(mouseenter)': 'showOnHover()? hover.set(true) : null',
        '(mouseleave)': 'showOnHover()? hover.set(false) : null',
    },
    exportAs: 'appStickyNavbar',
    standalone: true
})
export class StickyNavbarDirective implements OnDestroy {
  showOnHover = input(false);
  private readonly element = inject(ElementRef).nativeElement as HTMLElement;
  private readonly destroyRef = inject(DestroyRef);
  private hover = signal(false);

  navbarVisible = signal(true);
  yOffset = input(150)

  constructor() {
    afterNextRender(() => {
      this.initCSSStyles();
      this.onScroll().subscribe((val) => {
        if (val.position.y < this.yOffset() || val.scrollDirection == 'UP') {
          this.navbarVisible.set(true);
        } else {
          this.navbarVisible.set(false);
        }
      });
    });
  }

  private animateNav = effect(() => {
    if (this.navbarVisible() || this.hover()) {
      this.element.style.transform = 'translateY(0%)';
      this.element.style.transitionTimingFunction = 'ease-out';
    } else {
      this.element.style.transform =
      `translateY(-${this.showOnHover() ? 60 : 100}%)`;
      this.element.style.transitionTimingFunction = 'ease-in';
    }
  });

  ngOnDestroy(): void {
    this.animateNav.destroy();
  }

  private onScroll() {
    const position$ = new Observable<IPosition>((observer) => {
      window.onscroll = (e) => {
        let [x, y] = [Math.round(window.scrollX), Math.round(window.scrollY)];
        observer.next({ x, y });
      };
    });

    const wheel$ = new Observable<MouseDirection>((observable) => {
      var lastScrollTop = 0;
      window.addEventListener('scroll', () => {
        var st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          // downscroll code
          observable.next('DOWN');
        } else if (st < lastScrollTop) {
          // upscroll code
          observable.next('UP');
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      });
    });

    return combineLatest({
      position: position$,
      scrollDirection: wheel$,
    }).pipe(takeUntilDestroyed(this.destroyRef));;
  }

  private initCSSStyles(): void {
    this.element.style.transitionDuration = '.34s';
    this.element.style.transitionTimingFunction = 'linear';
    this.element.style.position = 'fixed';
    this.element.style.top = '0';
    this.element.style.left = '0';
    this.element.style.width = '100%';
    this.element.style.zIndex = '2';
  }
}
