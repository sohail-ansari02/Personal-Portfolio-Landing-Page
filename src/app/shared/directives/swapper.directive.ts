import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Swapper } from '../classes/swapper';

@Directive({
  selector: '.swapper',
  exportAs: 'swapper,',
})
export class SwapperDirective extends Swapper implements OnInit {
  constructor(public e1: ElementRef) {
    super(e1.nativeElement);
  }
  ngOnInit(): void {
  }
}
