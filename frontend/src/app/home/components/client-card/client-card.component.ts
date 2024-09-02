import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientCardComponent implements OnInit {
  @Input() data: Client | undefined = undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
