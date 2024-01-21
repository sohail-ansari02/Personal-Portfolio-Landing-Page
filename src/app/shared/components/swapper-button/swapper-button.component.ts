import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SwapperDirective } from '../../directives/swapper.directive';
type direction = 'prev' | 'next';
@Component({
  selector: 'app-swapper-button',
  templateUrl: './swapper-button.component.html',
  styleUrls: ['./swapper-button.component.scss'],
})
export class SwapperButtonComponent implements OnInit, AfterViewInit {
  @Input() set swapper(swapperDirective: SwapperDirective | HTMLElement) {
    console.log(swapperDirective);
    this._swapper = (swapperDirective as SwapperDirective).e1.nativeElement;
  }
  get swapper(): HTMLElement {
    return this._swapper;
  }
  _swapper!: HTMLElement;
  counter: number = 1;

  ngOnInit(): void {
    // console.log('SwapperButtonComponent', this.swapper.swapper);
    this.swapper;
  }
  ngAfterViewInit(): void {
    // console.log('SwapperButtonComponent', this.swapper);
    // throw new Error('Method not implemented.');
  }
  move(dir: direction): void {
    if (dir == 'next') {
      var left = this.swapper.scrollLeft;
      var viewBox = this.swapper.scrollWidth - this.swapper.offsetWidth;
      var total = parseInt((left / viewBox).toFixed(0.2));
      if (total == 1) {
        this.swapper.scrollTo(this.swapper.scrollWidth, 0);
      } else {
        this.swapper.scrollTo(this.swapper.offsetWidth, 0);
      }
      // console.log(left, viewBox, total);
    } else {
      this.swapper.scrollTo(this.swapper.scrollLeft / 2, 0);

    }
  }
}
