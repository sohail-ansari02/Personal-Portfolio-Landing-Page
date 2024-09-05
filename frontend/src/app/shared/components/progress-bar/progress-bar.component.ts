import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgStyle]
})
export class ProgressBarComponent implements OnInit {
  @Input() value: number | undefined = 40;

  ngOnInit(): void {
  }

}
