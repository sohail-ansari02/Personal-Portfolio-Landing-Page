import {
	ChangeDetectorRef,
	Component,
	DestroyRef,
	OnInit,
	PLATFORM_ID,
	TransferState,
	afterNextRender,
	inject,
	makeStateKey,
} from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ClientCardComponent } from "./components/client-card/client-card.component";
import { ClientsComponent } from "./sections/clients/clients.component";
import { ContactUsComponent } from "./sections/contact-us/contact-us.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { HomeService } from "./home.service";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ServicesComponent } from "./sections/services/services.component";
import { StatsComponent } from "./sections/stats/stats.component";
import { SupportsComponent } from "./sections/supports/supports.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	standalone: true,
	imports: [
		HeroComponent,
		SupportsComponent,
		AboutMeComponent,
		ServicesComponent,
		StatsComponent,
		ProjectsComponent,
		ContactUsComponent,
		ClientCardComponent,
		ClientsComponent,
	],
})
export class HomeComponent implements OnInit {
	private hs = inject(HomeService);
	private readonly destryRef = inject(DestroyRef);
	masterData: any;

	platformId = inject(PLATFORM_ID);
	transferState = inject(TransferState);
	myKey = makeStateKey<any>("masterData");

	ngOnInit(): void {
		// this.hs.getAllStaticData().subscribe((val) => {
		// 	this.masterData = val;
		// });
		if (isPlatformServer(this.platformId)) {
			this.hs.getAllData().subscribe((val) => {
				this.transferState.set(this.myKey, val);
				console.log(Date.now(), "server", val.heroSection.heading);
			});
		} else if (isPlatformBrowser(this.platformId)) {
			this.masterData = this.transferState.get(this.myKey, undefined);
			console.log(Date.now(), "client", this.masterData?.heroSection?.heading);
		}
	}
}
