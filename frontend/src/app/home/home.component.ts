import { Component, DestroyRef, OnInit, inject } from '@angular/core';

import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { HeroComponent } from './sections/hero/hero.component';
import { HomeService } from './home.service';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ServicesComponent } from './sections/services/services.component';
import { StatsComponent } from './sections/stats/stats.component';
import { SupportsComponent } from './sections/supports/supports.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    ContactUsComponent
  ],
})
export class HomeComponent implements OnInit {
  private hs = inject(HomeService);
  private readonly destryRef = inject(DestroyRef);
  masterData: any;
  constructor() {}
  ngOnInit(): void {
    this.hs.getAllData()
      .pipe(takeUntilDestroyed(this.destryRef))
      .subscribe((val) => (this.masterData = val));
  }
}
