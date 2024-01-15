export interface Tabs<T,H> {
  tabData: Array<H>;
  selectedTab: string;
  selectedData: Array<T>;
  initTabData: () => void;
  onSelectTab: (tabName: string) => void;
}
