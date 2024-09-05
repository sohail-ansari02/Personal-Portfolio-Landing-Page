import { Component, DestroyRef, OnInit, inject } from '@angular/core';

import { HomeService } from './home.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HeroComponent } from './sections/hero/hero.component';
import { SupportsComponent } from './sections/supports/supports.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ServicesComponent } from './sections/services/services.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [
        HeroComponent,
        SupportsComponent,
        AboutMeComponent,
        ServicesComponent,
        StatsComponent,
        ProjectsComponent,
        ContactUsComponent,
    ],
})
export class HomeComponent {
  private hs = inject(HomeService);
  masterData:any;
  constructor() {
    this.hs.masterData
      .pipe(takeUntilDestroyed())
      .subscribe((val) => (this.masterData = val));
  }
}
