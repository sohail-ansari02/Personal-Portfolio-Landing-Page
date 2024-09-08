import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  afterNextRender,
  effect,
  input,
} from '@angular/core';

import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { ShowOnClientSideDirective } from 'src/app/shared/directive/show-on-client-side.directive';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: true,
    imports: [NgxStarrySkyComponent,ShowOnClientSideDirective],
})
export class HeroComponent implements OnDestroy {
  data = input<any>();
  words: any[] = [];
  wordEffect = effect(() => {
    this.words = [this.data()?.heading];
  });

  showBg = false;
  constructor() {
    afterNextRender(()=> this.showBg = true)
  }

  ngOnDestroy(): void {
    this.wordEffect.destroy();
  }
}
