import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {
  data = input<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
