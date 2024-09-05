import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  effect,
  input,
} from '@angular/core';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: true,
    imports: [NgxStarrySkyComponent],
})
export class HeroComponent implements OnDestroy {
  data = input<any>();
  words: any[] = [];
  wordEffect = effect(() => {
    this.words = [this.data()?.heading];
  });

  ngOnDestroy(): void {
    this.wordEffect.destroy();
  }
}
