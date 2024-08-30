import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { HeroComponent } from './sections/hero/hero.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { NgModule } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { ProjectPipe } from './pipes/project.pipe';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServicesComponent } from './sections/services/services.component';
import { SharedModule } from '../shared/shared.module';
import { StatsComponent } from './sections/stats/stats.component';
import { SupportsComponent } from './sections/supports/supports.component';

// import { ContactUsComponent } from './sections/contact-/contact-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutMeComponent,
    InfoTabComponent,
    SupportsComponent,
    StatsComponent,
    ProjectsComponent,
    ProjectPipe,
    ClientsComponent,
    ContactUsComponent,
    ServicesComponent,
    ClientCardComponent,
    ServiceCardComponent,
    // ContactUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    SharedModule,
    NgxMarqueeComponent,
  ],
})
export class HomeModule {}
