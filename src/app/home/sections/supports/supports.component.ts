import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supports',
  templateUrl: './supports.component.html',
  styleUrls: ['./supports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
