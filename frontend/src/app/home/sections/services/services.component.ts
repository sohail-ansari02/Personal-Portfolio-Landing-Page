import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { SwapperButtonComponent } from '../../../shared/components/swapper-button/swapper-button.component';
import { SwapperDirective } from '../../../shared/directives/swapper.directive';

import { ServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgxRetroGridComponent, SwapperButtonComponent, SwapperDirective, ServiceCardComponent]
})
export class ServicesComponent implements OnInit {
  data = input<any>();

  ngOnInit(): void {
  }

}
