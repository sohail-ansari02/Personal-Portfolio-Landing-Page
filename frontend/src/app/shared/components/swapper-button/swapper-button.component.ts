import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SwapperDirective } from '../../directives/swapper.directive';
import { Breakpoints } from 'src/app/core/utils';
type direction = 'prev' | 'next';
@Component({
  selector: 'app-swapper-button',
  templateUrl: './swapper-button.component.html',
  styleUrls: ['./swapper-button.component.scss'],
})
export class SwapperButtonComponent implements OnInit, AfterViewInit {
  @Input() set swapper(swapperDirective: SwapperDirective) {
    // console.log(swapperDirective);
    this._swapper = swapperDirective;
  }
  get swapper(): SwapperDirective {
    return this._swapper;
  }
  get swapperEl(): HTMLElement {
    return this._swapper.e1.nativeElement;
  }
  _swapper!: SwapperDirective;
  counter: number = 0;
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    // console.log('SwapperButtonComponent', this.swapper.swapper);
    this.breakpointObserver
      .observe(Breakpoints.small)
      .subscribe((res) => (this.isMobile = res.matches));
  }
  ngAfterViewInit(): void {
    // console.log('SwapperButtonComponent', this.swapper);
    // throw new Error('Method not implemented.');
    for (let i = 0; i < this.swapperEl.children.length; i++) {
      let child = <HTMLElement>this.swapperEl.children.item(i);
      let pos = child.getBoundingClientRect();

      // console.log( i+1, pos.left + 68 < window.innerWidth);
    }
  }
  move(dir: direction): void {
    let totalWidth = this.swapperEl.scrollWidth;
    if (dir == 'next') {
      this.counter++;
      let cardToShow = this._swapper.cardToShow;
      let showIndex = cardToShow + 1;
      this.swapperEl.offsetWidth;
      this.swapperEl.scrollTo(this.swapperEl.offsetWidth * (this.counter), 0);
    }
  }
  // move(dir: direction): void {
  //   if (dir == 'next') {
  //     var left = this.swapper.scrollLeft;
  //     var viewBox = this.swapper.scrollWidth - this.swapper.offsetWidth;
  //     var total = parseInt((left / viewBox).toFixed(0.2));
  //     console.log(left, viewBox, total);
  //     if (total == 1) {
  //       this.swapper.scrollTo(this.swapper.scrollWidth, 0);
  //     } else {
  //       console.log(1, this.swapper.offsetWidth);
  //       this.swapper.scrollTo(this.swapper.offsetWidth, 0);
  //     }
  //     // console.log(left, viewBox, total);
  //   } else {
  //     this.swapper.scrollTo(this.swapper.scrollLeft / 2, 0);
  //   }
  // }
}
