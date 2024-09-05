import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { Client } from '../../interfaces/client';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';

import { RangePipe } from '../../../shared/pipes/range.pipe';

@Component({
    selector: 'app-client-card',
    templateUrl: './client-card.component.html',
    styleUrls: ['./client-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxShineBorderComponent, RangePipe]
})
export class ClientCardComponent implements OnInit {
  data = input<Client | undefined>(undefined);

  ngOnInit(): void {
  }
}
