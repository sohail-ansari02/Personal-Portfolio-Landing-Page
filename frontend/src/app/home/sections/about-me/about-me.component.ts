import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  effect,
  inject,
  input,
} from '@angular/core';

import { Info } from '../../interfaces/info';
import { InfoList } from '../../interfaces/info-list';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements OnInit {
  data = input<any>();
  cdRef = inject(ChangeDetectorRef);

  tabInfo: InfoList<Info>[] = [
    {
      name: 'Skills',
      list: [],
    },
    {
      name: 'Awards',
      list: [],
    },
    {
      name: 'Education',
      list: [],
    },
  ];

  infoEffect = effect(() => {
    this.tabInfo[0].list = (this.data()?.skills ?? []).map((e: any) => {
      return <Info>{
        name: e,
      };
    });
    this.tabInfo[1].list = (this.data()?.awards ?? []).map((e: any) => {
      return <Info>{
        name: e.name,
        text: e.orgName
      };
    });
    this.tabInfo[2].list = (this.data()?.education ?? []).map((e: any) => {
      return <Info>{
        name: e.courseName + ' ' + e.passingYear,
        text: e.instituteName,
      };
    });
  });

  constructor() {}

  ngOnInit(): void {}
}
