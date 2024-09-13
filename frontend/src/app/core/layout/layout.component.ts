import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { StickyNavbarDirective } from "./directives/sticky-navbar.directive";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";

@Component({
	selector: "app-layout",
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.scss"],
	standalone: true,
	imports: [
		HeaderComponent,
		StickyNavbarDirective,
		RouterOutlet,
		FooterComponent,
	],
})
export class LayoutComponent implements OnInit {
	ngOnInit(): void {}
}
