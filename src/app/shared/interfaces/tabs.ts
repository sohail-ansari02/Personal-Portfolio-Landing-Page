import { InfoList } from "src/app/home/interfaces/info-list";

export interface Tabs<Info> {
  tabData: InfoList<Info>[] | Info[];
  selectedTab: string;
  selectedData?: Array<Info> | Info;
  initTabData():void;
  onSelectTab(tabName: string):void;
}
