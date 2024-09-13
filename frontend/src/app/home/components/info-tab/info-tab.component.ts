import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	effect,
	inject,
	input,
	OnInit,
} from "@angular/core";
import { InfoList } from "../../interfaces/info-list";
import { Info } from "../../interfaces/info";
import { Tabs } from "src/app/shared/interfaces/tabs";
import { NgClass } from "@angular/common";

@Component({
	selector: "app-info-tab",
	templateUrl: "./info-tab.component.html",
	styleUrls: ["./info-tab.component.scss"],
	standalone: true,
	imports: [NgClass],
})
export class InfoTabComponent implements OnInit, Tabs<Info> {
	tabData = input<InfoList<Info>[]>([]);
	selectedTab: string = "";
	selectedData: Info[] = [];

	ngOnInit(): void {}
	tabDataE = effect(() => {
		this.selectedTab = this.tabData()[0].name;
		this.selectedData = this.tabData()[0].list;
	});
	initTabData() {
		// this.tabData = [
		//   {
		//     name: 'Skills',
		//     list: [
		//       {
		//         name: 'Website Development',
		//         progress: 95,
		//       },
		//       {
		//         name: 'Web Application Development',
		//         progress: 80,
		//       },
		//       {
		//         name: 'Interaction Design - Animation',
		//         progress: 70,
		//       },
		//     ],
		//   },
		//   {
		//     name: 'Awards',
		//     list: [
		//       {
		//         name: 'Best Execution in UX Stratagy',
		//         text: 'Web Agency',
		//       },
		//       {
		//         name: 'Best UI designer',
		//         text: 'Web Agency',
		//       },
		//     ],
		//   },
		//   {
		//     name: 'Education',
		//     list: [
		//       {
		//         name: 'Masters in Computer Science (2017-2020)',
		//         text: 'Savitribai Phule University',
		//       },
		//       {
		//         name: 'School Name',
		//         text: '[School Name]'
		//       },
		//     ],
		//   },
		// ];
	}
	onSelectTab(tabName: string) {
		if (tabName == this.selectedTab) return;
		this.selectedTab = tabName;
		this.selectedData = <Info[]>(
			this.tabData().find((info) => info.name == tabName)?.list
		);
	}
}
