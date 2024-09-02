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
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
import { NgxFlickeringGridComponent } from '@omnedia/ngx-flickering-grid';
import { NgxGridpatternComponent } from '@omnedia/ngx-gridpattern';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { NgxRetroGridComponent } from '@omnedia/ngx-retro-grid';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
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
    NgxAuroraComponent,
    NgxDotpatternComponent,
    NgxRetroGridComponent,
    NgxGridpatternComponent,
    NgxStarrySkyComponent,
    NgxFlickeringGridComponent,
    NgxShineBorderComponent,
    NgxBorderBeamComponent,
    NgxTypewriterComponent,
  ],
})
export class HomeModule {}
