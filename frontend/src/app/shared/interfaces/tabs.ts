import { InfoList } from "src/app/home/interfaces/info-list";
import { InputSignal } from "@angular/core";

export interface Tabs<Info> {
  tabData: InfoList<Info>[] | Info[] | InputSignal<InfoList<Info>[]>;
  selectedTab: string;
  selectedData?: Array<Info> | Info;
  initTabData():void;
  onSelectTab(tabName: string):void;
}
