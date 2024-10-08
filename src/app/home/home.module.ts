import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { SupportsComponent } from './sections/supports/supports.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ProjectPipe } from './pipes/project.pipe';
import { ClientsComponent } from './sections/clients/clients.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { ServicesComponent } from './sections/services/services.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
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
  imports: [CommonModule, HomeRoutingModule, NgOptimizedImage, SharedModule],
})
export class HomeModule {}
