import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	input,
} from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
	selector: "app-progress-bar",
	templateUrl: "./progress-bar.component.html",
	styleUrls: ["./progress-bar.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgStyle],
})
export class ProgressBarComponent implements OnInit {
	value = input<number>(40);

	ngOnInit(): void {}
}
