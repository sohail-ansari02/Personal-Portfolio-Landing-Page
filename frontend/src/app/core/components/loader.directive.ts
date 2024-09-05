import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Directive,
  afterNextRender,
  inject,
  model,
  output,
  signal,
} from '@angular/core';
import { DOCUMENT, NgOptimizedImage } from '@angular/common';

@Directive({
  selector: '[appLoader]',
  standalone: true,
  host: {
    '[style.opacity]': 'showLoader() ? "" : "0"',
    '[style.transition]': 'showLoader() ? "" : "all 1.2s"',
    '[style.display]': 'remove() ? "" : "none"',
  },
})
export class LoaderDirective implements AfterViewInit {
  showLoader = model<boolean>(true);
  remove = signal(true);
  onHide = output();
  delayTime = 3200;
  removeTime = 1200;
  document = inject(DOCUMENT);
  constructor() {
    afterNextRender(() => {
      this.document.body.style.overflow = 'hidden';
      this.document.body.inert = true;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.document.body.style.overflow = 'visible';
      this.document.body.inert = false;
      this.showLoader.set(false);
      this.onHide.emit();
      setTimeout(() => {
        this.remove.set(false);
      }, this.removeTime);
    }, this.delayTime);
  }

  initLoaderStyles(){

  }
}
