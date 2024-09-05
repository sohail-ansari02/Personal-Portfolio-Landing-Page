import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
// import { Swapper } from '../classes/swapper';
import { toRem } from 'src/app/core/utils';

@Directive({
    selector: '.swapper',
    exportAs: 'swapper,',
    standalone: true,
})
export class SwapperDirective implements OnInit, AfterViewInit {
  @Input() total: number = 0;
  @Input() cardWidth: number = 0;
  @Input() cardToShow: number = 0;
  @Input() gap: number = 0;

  swapper: HTMLElement;
  constructor(public e1: ElementRef) {
    this.swapper = e1.nativeElement;
  }
  ngOnInit(): void {
    this.initStyling();

  }
  ngAfterViewInit(): void {
    this.initScroll();
    if (this.swapper.children.length == 0) return;
    this.onApearInView(
      <HTMLElement>this.swapper.children.item(this.swapper.children.length - 1)
    );
  }
  initScroll(): void {
    this.swapper.style.scrollBehavior = 'auto';

    // in mobile view, I changed the styling so
    // the entire swapper was not appearing 100%.
    // instead of it, its last element was appearing 100%
    // so grab that one, and used it in below function call
    this.swapper.scrollTo(this.swapper.scrollWidth, 0);
    this.swapper.style.scrollBehavior = 'smooth';
  }

  scrollToStart(): void {
    this.swapper.style.scrollBehavior = 'smooth';
    this.swapper.scrollTo(0, 0);
  }

  onApearInView(element: HTMLElement): void {

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        // If intersectionRatio is 0, the target is out of view
        // and we do not need to do anything.
        if (entries[0].intersectionRatio <= 0) return;
        // console.log(entries[0].intersectionRatio);
        this.scrollToStart();
        intersectionObserver.disconnect();
      },
      {
        threshold: .9, //for 100% element appears in screen
      }
    );
    intersectionObserver.observe(element);
  }
  initStyling(): void {
    this.swapper.style.gap = toRem(30);
    let s = `repeat(${this.total},  calc(
      (100% - ${toRem(this.gap)} * ( ${this.cardToShow} - 1) )
      / ${this.cardToShow})
      )`;

    this.swapper.style.gridTemplateColumns = s;
  }
}
