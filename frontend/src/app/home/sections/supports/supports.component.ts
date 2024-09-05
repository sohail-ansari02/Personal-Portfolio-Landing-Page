import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  input,
  signal,
} from '@angular/core';

import { single } from 'rxjs';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';


@Component({
    selector: 'app-supports',
    templateUrl: './supports.component.html',
    styleUrls: ['./supports.component.scss'],
    standalone: true,
    imports: [NgxMarqueeComponent],
})
export class SupportsComponent implements OnInit {
  data = input<any>();
  list = effect(
    () => {
      this.firstRow.set(
        (this.data()?.technologyList ?? []).slice(
          0,
          Math.round((this.data()?.technologyList ?? []).length / 2)
        )
      );
      this.secondRow.set(
        (this.data()?.technologyList ?? []).slice(
          Math.round((this.data()?.technologyList ?? []).length / 2)
        )
      );
    },
    { allowSignalWrites: true }
  );

  firstRow = signal<any[]>([]);
  secondRow = signal<any[]>([]);

  ngOnInit(): void {}
}
