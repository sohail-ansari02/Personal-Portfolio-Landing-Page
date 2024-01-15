import { Component, OnInit } from '@angular/core';
import { InfoList } from '../../interfaces/info-list';
import { Info } from '../../interfaces/info';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss'],
})
export class InfoTabComponent implements OnInit {
  tabData: InfoList[] = [];
  selectedTab: string = '';
  selectedData: Info[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initData();
    this.selectedTab = this.tabData[0].name;
    this.selectedData = this.tabData[0].list;
  }
  initData() {
    this.tabData = [
      {
        name: 'Main Skills',
        list: [
          {
            name: 'User Experience Design - UI/UX',
            progress: 95,
          },
          {
            name: 'Web & User Interface Design - Development',
            progress: 80,
          },
          {
            name: 'Interaction Design - Animation',
            progress: 70,
          },
        ],
      },
      {
        name: 'Awards',
        list: [
          {
            name: 'Best Execution in UX Stratagy',
            text: 'Web Agency'
          },
          {
            name: 'Best UI designer',
            text: 'Web Agency'
          },
        ],
      },
      {
        name: 'Education',
        list: [
          {
            name: 'Masters in Computer Science (2017-2020)',
            text: 'Savitribai Phule University'
          },
          {
            name: 'School Name',
          },
        ],
      },
    ];
  }
  onSelectTab(tabName: string) {
    this.selectedTab = tabName;
    this.selectedData = <Info[]>(
      this.tabData.find((info) => info.name == tabName)?.list
    );
  }
}
