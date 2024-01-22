import { AfterViewInit, Directive, Input } from '@angular/core';
import { toRem } from 'src/app/core/utils';


@Directive()
export abstract class Swapper implements AfterViewInit {
  @Input() total: number = 0;
  @Input() cardWidth: number = 0;
  @Input() cardToShow: number = 0;
  @Input() gap: number = 0;

  swapper: HTMLElement;
  constructor(swapper: HTMLElement) {
    this.swapper = swapper;
  }
  ngAfterViewInit(): void {
    this.initStyling();
    this.initScroll();
    this.onApearInView();
  }

  initScroll(): void {
    this.swapper.style.scrollBehavior = 'auto';
    this.swapper.scrollTo(this.swapper.scrollWidth, 0);
    this.swapper.style.scrollBehavior = 'smooth';
  }

  scrollToStart(): void {
    this.swapper.style.scrollBehavior = 'smooth';
    this.swapper.scrollTo(0, 0);
  }

  onApearInView(): void {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        // If intersectionRatio is 0, the target is out of view
        // and we do not need to do anything.
        if (entries[0].intersectionRatio <= 0) return;

        this.scrollToStart();
        intersectionObserver.disconnect();
      },
      {
        threshold: 1, //for 100% element appears in screen
      }
    );
    intersectionObserver.observe(this.swapper);
  }
  initStyling(): void {
    this.swapper.style.gap = toRem(30);
    let s = `repeat(${this.total},  calc(
      (100% - ${toRem(this.gap)} * ( ${this.cardToShow} - 1) )
      / ${this.cardToShow})
      )`;

    this.swapper.style.gridTemplateColumns = s;
  }
  private calc(val: number): string {
    return val + 'px';
    return val / 16 + 'rem';
  }
}
