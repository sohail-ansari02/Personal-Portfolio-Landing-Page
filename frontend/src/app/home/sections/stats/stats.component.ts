import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  // changeDetection: ChangeDestectionStrategy.OnPush,
})
export class StatsComponent implements OnInit {
  data = input<any>();

  cards: card[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initCardData();
  }
  initCardData() {
    this.cards = [
      {
        value: '500+',
        desc: 'Projects Completed',
      },
      {
        value: '98%',
        desc: 'Client Satisfaction',
      },
      {
        value: '5K',
        desc: 'Lines of Code Written',
      },
      {
        value: '120+',
        desc: 'Cups of Coffee Consumed',
      },
    ];
  }
}

interface card {
  value: string;
  desc: string;
}
