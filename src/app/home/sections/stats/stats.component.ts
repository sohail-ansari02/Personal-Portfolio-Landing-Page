import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {
  cards: card[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initCardData();
  }
  initCardData() {
    this.cards = [
      {
        value: '8300+',
        desc: 'Figma ipsum component variant main layer. Hand.',
      },
      {
        value: '100%',
        desc: 'Figma ipsum component variant main layer. Hand.',
      },
      {
        value: '3.5K',
        desc: 'Figma ipsum component variant main layer. Hand.',
      },
      {
        value: '240+',
        desc: 'Figma ipsum component variant main layer. Hand.',
      },
    ];
  }
}

interface card {
  value: string;
  desc: string;
}
