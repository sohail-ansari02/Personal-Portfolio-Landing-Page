import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  effect,
  input,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnDestroy {
  data = input<any>();
  words: any[] = [];
  wordEffect = effect(() => {
    this.words = [this.data()?.heading];
  });

  constructor() {}
  ngOnDestroy(): void {
    this.wordEffect.destroy();
  }
}
