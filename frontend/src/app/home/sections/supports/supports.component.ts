import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  input,
  signal,
} from '@angular/core';

import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { ShowOnClientSideDirective } from 'src/app/shared/directive/show-on-client-side.directive';
import { single } from 'rxjs';

@Component({
    selector: 'app-supports',
    templateUrl: './supports.component.html',
    styleUrls: ['./supports.component.scss'],
    standalone: true,
    imports: [NgxMarqueeComponent,ShowOnClientSideDirective],
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
