import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {
  data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
