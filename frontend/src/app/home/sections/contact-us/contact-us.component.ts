import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	TemplateRef,
	input,
	viewChild,
} from "@angular/core";

import { NgxBorderBeamComponent } from "@omnedia/ngx-border-beam";
import { NgxFlickeringGridComponent } from "@omnedia/ngx-flickering-grid";
import { ShowOnClientSideDirective } from "src/app/shared/directive/show-on-client-side.directive";
import Toastify from "toastify-js";
import { environment } from "src/environments/environment";
import { toast } from "src/app/core/utils";

@Component({
	selector: "app-contact-us",
	templateUrl: "./contact-us.component.html",
	styleUrls: ["./contact-us.component.scss"],
	standalone: true,
	imports: [NgxFlickeringGridComponent, NgxBorderBeamComponent, ShowOnClientSideDirective],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
	form = viewChild<ElementRef>("form");
	url: string = environment.ContactFormUrl;
	data = input<any>();

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		// console.log(this.form.nativeElement);
	}

	onSubmit(evt: Event): void {
		// @ts-ignore
		window.Pageclip.form(this.form().nativeElement, {
			onSubmit: () => {
				// console.log('submitted');
			},
			onResponse: () => {
				toast("Sumitted successfully!🚀");
			},
			successTemplate: "",
		});
	}
}
