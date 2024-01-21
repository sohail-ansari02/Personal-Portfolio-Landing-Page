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
  disabled: any = {
    next: false,
  };

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
      if (
        this.swapper.offsetWidth * (this.counter + 1) >
        this.swapper.scrollWidth
      ) {
        this.swapper.scrollTo(this.swapper.scrollWidth, 0);
        console.log('object');
      } else {
        this.swapper.scrollTo(this.swapper.offsetWidth, 0);
        this.counter++;
      }
    }
    console.log(this.counter);
  }
}
