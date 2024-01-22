import {
  AfterViewInit,
  Directive,
  ElementRef,
} from '@angular/core';
import { Swapper } from '../classes/swapper';

@Directive({
  selector: '.swapper',
  exportAs: 'swapper,',
})
export class SwapperDirective extends Swapper implements AfterViewInit {
  constructor(public e1: ElementRef) {
    super(e1.nativeElement);
  }
}
